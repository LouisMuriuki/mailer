import nodemailer from "nodemailer";
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exclusive Recipe</title>
    <style type="text/css">
      body {
        font-family: "Georgia", serif;
        margin: 0;
        padding: 20px;
        background: "#BFA89A";
      }
      .wrapper {
        width: 100%;
        table-layout: fixed;
      }
      .wrapper-inner {
        width: 600px;
        margin: 0 auto;
        background: #bfa89a;
      }
      .left-wrapper-inner {
        position: relative;
        width: 300px;
      }
      .right-wrapper-inner {
        width: 300px;
      }
      .container {
        padding: 20px;
      }
      .header {
        position: absolute;
        bottom: 60px;
        left: 90%;
        text-align: center;
        font-size: 24px;
        width: 400px;
        padding: 20px;
        background-color: #fffffc;
        color: #333333;
        font-family: "Lora", sans-serif;
      }
      .recipe-image {
        width: 100%;
        display: block;
        border-radius: 50%;
        overflow: hidden;
        line-height: 0;
        border: 5px solid #f2f2f2;
      }
      .recipe-image img {
        width: 300px;
        height: 300px;
        display: block;
        object-fit: cover;
      }
      .content {
        padding: 20px;
        background: #ffffff;
      }
      .content-column {
        width: 50%;
        float: left;
        padding: 10px;
        box-sizing: border-box;
      }
      .content-column h2 {
        color: #333333;
        font-size: 20px;
        margin-bottom: 10px;
      }
      .content-column ul,
      .content-column ol {
        padding-left: 20px;
      }
      .notes {
        clear: both;
        padding-top: 20px;
        font-family: "Arial", sans-serif;
        color: #333333;
        font-size: 16px;
        background: #f6f6f6;
        padding: 20px;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        padding: 10px 20px;
        background: #f6f6f6;
        color: #999999;
        font-family: "Arial", sans-serif;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <table class="wrapper" role="presentation">
      <tr>
        <td class="wrapper-inner">
          <div class="left-wrapper-inner">
            <div class="recipe-image">
              <!-- Replace 'path_to_recipe_image.jpg' with the path to your image -->
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1Y5GdsoqJ-iiRXowW6mjS2Vx6W86NElZmSIwb0XE2Q&s"
                alt="Vanilla Cake with Strawberry Jam"
              />
            </div>
            <div class="header">VANILLA CAKE With strawberry jam</div>
          </div>

          <div class="right-wrapper-inner"></div>
          <!-- Image -->

          <!-- Recipe Title -->

          <!-- Content -->
          <div class="content">
            <!-- Ingredients Column -->
            <div class="content-column">
              <h2>INGREDIENTS</h2>
              <ul>
                <li>100 ml milk</li>
                <li>50 g butter</li>
                <li>3 eggs</li>
                <li>1 tbs cocoa</li>
                <li>2 tsp baking soda</li>
                <li>a pinch of salt</li>
                <li>3 eggs (repeated, assuming it's a mistake)</li>
              </ul>
            </div>

            <!-- Directions Column -->
            <div class="content-column">
              <h2>DIRECTIONS</h2>
              <ol>
                <li>
                  Nunc nulla velit, feugiat vitae ex quis, lobortis porta leo.
                </li>
                <li>Donec dictum lectus in ex accumsan sodales.</li>
                <li>Habitant morbi tristique.</li>
                <!-- Add more directions as needed -->
              </ol>
            </div>
            <!-- Notes Section -->
            <div class="notes">
             <h2>NUTRITION INFORMATION</h2>
              <p>
                Nunc nulla velit, feugiat vitae ex quis, lobortis porta leo.
                Donec dictum lectus in ex accumsan sodales. Pellentesque
                habitant morbi tristique.
              </p>
            </div>
            <!-- Clear both columns -->
            <div style="clear: both"></div>
          </div>

          <!-- Footer -->
          <div class="footer">© 2024 Chef Tuber. All Rights Reserved.</div>
        </td>
      </tr>
    </table>
  </body>
</html>

`;
async function sendEmail(req: any, res: any): Promise<void> {
  console.log("incoming request", req.body);
  const { to, subject, text } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, 
      secure: false, 
      auth: {
        user: "luihugo7@gmail.com", 
        pass: "***********", // change this for it to work with your email
      },
    });

  
    let info = await transporter.sendMail({
      from: "luihugo7@gmail.com",
      to: to, 
      subject: subject, 
      text: text,
      html: htmlContent,
    });
    res.status(200).json({ message: "Email sent successfully" });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending email" });
  }
}
export default sendEmail;
