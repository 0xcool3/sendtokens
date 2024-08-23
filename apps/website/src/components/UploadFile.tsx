import React, { createRef, useCallback } from "react";
// import { useDropzone } from "react-dropzone";
import { useDropzone } from "react-dropzone-esm";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import prettyBytes from "pretty-bytes";
import ExcelJS from "exceljs";
export function UploadFile({ onDataParsed }: any) {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      acceptedFiles.forEach((file: any) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          const buffer: any = reader.result;
          const workbook = new ExcelJS.Workbook();
          workbook.xlsx.load(buffer).then(() => {
            const data = [];
            const columnData: string[] = [];
            workbook.eachSheet((worksheet, sheetId) => {
              // const sheetData = [];

              worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                const rowData: any = row.values;
                const cellValue = rowData[1] || ""; // Get value from specified column
                if (cellValue != "") columnData.push(cellValue.toString()); // Only add if not empty

                // sheetData.push(row.values);
              });
              // data.push({ sheetId, sheetData });
            });
            if (columnData.length >= 1 && columnData) {
              let [, ...rest] = columnData;
              onDataParsed(rest.join(";")); // 调用回调函数传递数据
            }
          });
        };

        reader.readAsArrayBuffer(file);
      });
    },
    [onDataParsed]
  ); // 确保使用onDataParsed的最新实例

  const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    // https://github.com/react-dropzone/react-dropzone/issues/1220
    accept: {
      // "text/csv": [".csv"],
      // "text/plain": [".txt"],
      "application/vnd.oasis.opendocument.spreadsheet": [".ods"],
      "application/vnd.oasis.opendocument.text": [".odt"],
      "application/vnd.ms-excel": [".xls", ".slk", ".xla", ".xlt", ".xlw"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/x-iwork-numbers-sffnumbers": [".numbers"],
    },
  });

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const displayFile =
    acceptedFiles && acceptedFiles.length ? (
      <div>
        {(acceptedFiles as any)[0]?.path} - {prettyBytes(acceptedFiles[0].size)}
      </div>
    ) : null;

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()}></input>

        <Button
          className="justify-between"
          variant="bordered"
          fullWidth
          radius="full"
          onClick={open}
          endContent={<Icon icon="lucide:upload" width={16} />}
        >
          {displayFile}

          {(!acceptedFiles || acceptedFiles.length < 1) && "请添加Excel文件"}
        </Button>
      </div>
    </section>
  );
}
