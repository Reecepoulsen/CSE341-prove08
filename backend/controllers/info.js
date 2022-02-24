const fs = require('fs');

exports.getInfo = (req, res, next) => {
  let base64Img = null;
  const readStream = fs.createReadStream('./public/base64Img.txt', {highWaterMark: 100});
  const data = [];
  readStream.on('data', chunk => data.push(chunk));
  readStream.on('end', () => {
    base64Img = Buffer.concat(data).toString();
    res.status(200).json({
      professionalName : "D. Reece Poulsen",
      nameLink : {
        firstName : "Reece",
        url : "https://reecepoulsen.github.io/",
      },
      primaryDescription : "Computer Science Student at BYU-I",
      workDescription1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      workDescription2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkTitleText: "Software Developer",
      linkedInLink : {
        text : "Linkedin",
        link : "https://www.linkedin.com/in/reece-poulsen/"
      },
      githubLink : {
        text : "Github",
        link : "https://github.com/Reecepoulsen"
      },
      base64Image : `${base64Img}`
    })
  });
  readStream.on('error', e => {
    console.log(e);
    res.sendStatus(409);
  });
}