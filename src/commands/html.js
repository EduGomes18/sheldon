const command = {
  name: "html",
  run: async (toolbox) => {
    const { print, parameters } = toolbox;
    let fs = require("fs");

    fs.readFile("nov.html", "utf8", function(err, data) {
      let result = data;
      let teste = JSON.stringify(result);

      let splice = teste.replace(
        /<tr>/g,
        '<table border="0" cellpadding="0" cellspacing="0"> <tr>'
      );
      let splice2 = splice.replace(/<\/tr>/g, "</tr> </table>");

      let splice3 = splice2.replace(/\\r/g, "");

      let splice4 = splice3.replace(/\\n/g, "");

      let splice5 = splice4.replace(/\\t/g, "");

      let splice6 = splice5.replace(/.$/, "");

      let splice7 = splice6.replace(/"/, "");

      let splice8 = splice7.replace(/\\/g, "");

      let splice9 = splice8.replace(
        /\alt=""/g,
        'style="display:block; margin:0; padding:0;"'
      );

      

      fs.writeFileSync("index.html", splice9);
    });
  },
};

module.exports = command;
