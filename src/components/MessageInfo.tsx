import { data } from "framer-motion/client";
import { MessageDecisions } from "./MessageDecisions";
import { Card } from "./common/Card";
import { use } from "framer-motion/m";
import { useEffect, useState } from "react";

interface MessageInfoProps {
  content: any;
  sender: "user" | "bot";
}

export function MessageInfo({ content, sender }: MessageInfoProps) {
  const [tableHeaders, setTableHeaders] = useState<string[]>([
    "Project",
    "Date",
    "Hours",
  ]);

  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <Card variant={sender}>
      <table className="  text-xs  text-center">
        <thead className="bg-">
          <tr className="border-b dark:border-neutral-700">
            {tableHeaders.map((header) => (
              <th className="px-2 py-2.5 dark:text-neutral-100 font-medium text-left">
                {" "}
                {header}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((row) => (
            <tr className="   border-t dark:border-neutral-700 text-center ">
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
