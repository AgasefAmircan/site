import { mailOptions, transporter } from "../../config/nodemailer";
const handler =  (req, res) => {
  if (req.method === "POST") {
    const values = req.body;

    try {
       transporter.sendMail({
        ...mailOptions,
        subject: values.subject,
        test: "This is a test string",
        html: "<h1> Test Title </h1><p>Some body text</p>",
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
};
export default handler;
