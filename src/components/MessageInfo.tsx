/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "./common/Card";

interface MessageInfoProps {
  content: any;
  sender: "user" | "bot";
}

export function MessageInfo({ content, sender }: MessageInfoProps) {
  const tableHeaders = ["Project", "Date", "Hours"];

  return (
    <Card variant={sender}>
      <table className="  text-xs  text-center">
        <thead className="bg-">
          <tr className="border-b dark:border-neutral-700">
            {tableHeaders.map((header) => (
              <th
                key={header}
                className="px-1 py-2.5 dark:text-neutral-100 font-medium "
              >
                {" "}
                {header}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((row: any) => (
            <tr
              key={row.Date}
              className="  border-t dark:border-neutral-700 text-center "
            >
              <td className="px-2  py-2.5 dark:text-neutral-400 text-neutral-500 capitalize">
                {row.Project_Name}
              </td>
              <td className="px-2 py-2.5  dark:text-neutral-400 text-neutral-500">
                {" "}
                {row.Date}{" "}
              </td>
              <td className="px-2 py-2.5 dark:text-neutral-400 text-neutral-500">
                {" "}
                {row.Hours}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
