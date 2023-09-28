# LambdaPeeler
![Lambda Peeler V2](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/d2dcfdf0-d4a3-4549-b2a0-57f69f7c3f81)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/4a40068b-3000-4bc2-b401-f9a89fd4c130)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/e8363ab1-9650-43ae-b569-1e22ac594acb)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/0ede3d9f-fa64-4d84-ad92-c85566e90fc4)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/d3bf398d-34b7-480d-b217-d1095b7fb401)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/21bd9abf-f5ef-4504-bbc3-4d41e4b3bdb4)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/a856aca2-b048-4100-8c68-5232cac0544d)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/9a2a204b-c276-4ada-94fa-a9ec35062b10)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/dfd23f70-cca2-4ae1-9df6-01a30c93daea)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/5e25d4e4-dbc5-4667-8721-c23ce76fe600)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/b270f1ae-79f4-4c6d-a2c7-1dbf7342008e)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/ccd77e55-0399-4d4a-b41f-41f369774f7a)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/8c57c3c0-ed7d-495c-8c8e-1f229c817a7b)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/4963c2d6-fa49-43a1-9d83-fdea0822eb9d)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/0a86a0f5-18bc-403c-9bf1-ba281edbe033)
![image](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/982f9d6e-cf86-4ce6-b1ff-bee89edb2fa6)

<p align="center"><strong>Web dashboard for managing AWS Lambda functions and layers</strong></p>
Lambda Peeler is a web-based dashboard tailored for AWS Lambda developers. It is meticulously designed to bridge the gap between managing Lambda functions and layers, simplifying AWS cloud operations.

# Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Connecting to our App](#connecting-to-our-app)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
## Features
**Bulk Operations**: Time is of the essence. And Lambda Peeler understands that. Perform bulk connections and disconnections without a hitch, and with the assurance of compatibility.  

**Risk Mitigation**: Gone are the days of the dreaded trial-and-error. Our built-in compatibility testing feature cross-examines functions with layers, ensuring they're in harmony. This not only guarantees smoother integrations but significantly curtails the risk of runtime failures.  

**Error Handling**: Our robust error messages notify users of failed connection attempts, allowing them to easily troubleshoot problems.

**Direct AWS Integration**: Leveraging the AWS SDK, Lambda Peeler is deeply integrated with AWS services. This ensures real-time operations and a seamless user experience.  

## Demo
**Connecting a function to a layer**  
![Connect2](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/8159a173-0024-4f7b-b315-5e710203128f)  

**Removing a function from a layer**  
![RemoveGif](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/532bfef1-75f4-4843-ab00-d3eb4f60edf0)  

**Failed Compatibility**  
![Failed](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/ab1706a9-82e4-4660-89ef-5e51093543ba)    

**Please note that Lambda functions must have at least one shareable test event in order to connect via our dashboard!**  

**How to Make a Shareable Test**  
![Sep-27-2023 11-55-21](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/7ba6bd04-fc74-4bc0-8899-741aca452af0)

## Connecting to our App
1. Navigate to your IAM dashboard on your AWS account and create a new role.
![img1](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/fcc97b75-2fd7-41a8-a328-6c9d5ff75ba9)

2. Select AWS Account as the trusted entity and enter our tool's ARN number: 524403604286.
![img2](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/200c84c7-7767-4d9c-ba68-aa495edf907c)

3. When adding permissions, make sure to add AmazonEventBridgeSchemasFullAccess and AWSLambda_FullAccess. Your permissions should end up looking like this when you are finalizing the role.
![img3](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/d2d2cc54-47db-4d38-8eaa-774fa66e001f)

4. The role name has to be OSPTool.
![img4](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/370fd6ee-ca1b-4178-8d33-dda603c6beee)

5. Click on OSPTool under roles and copy the ARN number.
![img6](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/eadb46d5-ee24-497b-b42b-e85b0b2d78ed)

6. Your trust relationships under your OSPTool role should also look like this.
![img5](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/15767a90-c054-4502-8cba-d4ca0e421859)

7. Head over to our website <a href="https://www.lambdapeeler.com"> lambdapeeler.com </a>and sign up by entering your ARN number as well as the region of your AWS account.
![Screenshot 2023-09-27 at 11 44 49 AM](https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/23a6580a-aff6-4917-a61a-b9467e7dcb16)

## Contributing
Contributions are the foundation of the Open Source Community, fostering an environment where developers can openly share, collaborate, and ignite inspiration! Your contributions, whatever you decide to offer, are deeply valued and welcomed. Please create a fork of the dev branch and create a feature branch on your own repo. Make all pull requests from your feature branch into LambdaPeeler's dev branch. Also, feel free to open an issue!

**Features to Add**
- Users can currently connect functions to layers on the layers tab but not the other way around on the functions tab
- We would like to move any unused layers to a separate log in order to reduce clutter on the dashboard
- The ability for users to see information about their layers on our dashboard such as dependencies and runtime enviroment

If you have any questions or need help troubleshooting, please feel free to reach out on <a href="https://www.linkedin.com/in/lambda-peeler/"> Linkedin! </a>

## License
LambdaPeeler is licensed under the MIT License. See LICENSE for more details.

## Authors
<div align="center">
<table>
    <tr>
        <td align="center">
            <img src="https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/8375918d-26df-470e-977c-e579b9d19e1b" width="100">
            <br>
            Michael Shand
            <br>
            <a href="https://github.com/shandie231">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130809-4c88307f-f388-4c61-b301-695526fdec0d.png" width="20" alt="GitHub">
            </a>
            <br>
            <a href="https://www.linkedin.com/in/michael-shand-0a2924163/">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130207-a52096b1-552d-4c57-982c-3f22023ed68a.png" width="20" alt="LinkedIn">
            </a>
        </td>
        <td align="center">
            <img src="https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/b266f84f-9d5f-436b-aaae-93aacf16aae3" width="100">
            <br>
            Greg Osborn
            <br>
            <a href="https://github.com/greg-osborn">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130809-4c88307f-f388-4c61-b301-695526fdec0d.png" width="20" alt="GitHub">
            </a>
            <br>
            <a href="https://www.linkedin.com/in/gregdosborn/">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130207-a52096b1-552d-4c57-982c-3f22023ed68a.png" width="20" alt="LinkedIn">
            </a>
        </td>
        <td align="center">
            <img src="https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/053246c1-1360-4bb0-a548-5387298b5ef6" width="100">
            <br>
            Zach Hamilton
            <br>
            <a href="https://github.com/ZachMHamilton">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130809-4c88307f-f388-4c61-b301-695526fdec0d.png" width="20" alt="GitHub">
            </a>
            <br>
            <a href="https://www.linkedin.com/in/zach-m-hamilton/">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130207-a52096b1-552d-4c57-982c-3f22023ed68a.png" width="20" alt="LinkedIn">
            </a>
        </td>
        <td align="center">
            <img src="https://github.com/oslabs-beta/LambdaPeeler/assets/135868272/6c10ba8b-71a2-4fc1-9bde-b793d8780a24" width="100">
            <br>
            Nhat Trinh
            <br>
            <a href="https://github.com/Nhat-Trinh1">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130809-4c88307f-f388-4c61-b301-695526fdec0d.png" width="20" alt="GitHub">
            </a>
            <br>
            <a href="https://www.linkedin.com/in/nhattrinh/">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/135868272/270130207-a52096b1-552d-4c57-982c-3f22023ed68a.png" width="20" alt="LinkedIn">
            </a>
        </td>
    </tr>
</table>
</div>
