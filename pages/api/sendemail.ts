import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";
import { IContactForm } from "@type/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data: IContactForm = req.body;
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    const fixTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...{
          text: data.message,
        },
        subject: `${fixTime} ${data.name}`,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }

  return res.status(400).json({ message: "Bad request" });
}
