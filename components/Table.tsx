import React from "react";

const Table = () => {

  const tableData = [
    { codi: "020101", desc: "Llots de rentatge i neteja" },
    { codi: "020201", desc: "Llots de rentatge i neteja" },
    { codi: "020203", desc: "Materials inadequats per al consum o l'elaboració" },
    { codi: "020204", desc: "Llots del tractament in situ d'efluents" },
    { codi: "020301", desc: "Llots del rentatge, neteja, pelat, centrifugació i separació" },
    { codi: "020304", desc: "Materials inadequats per al consum o l'elaboració" },
    { codi: "020305", desc: "Llots del tractament in situ d'efluents" },
    { codi: "020403", desc: "Llots del tractament in situ d'efluents" },
    { codi: "020501", desc: "Materials inadequats per al consum o l'elaboració" },
    { codi: "020502", desc: "Llots del tractament in situ d'efluents" },
    { codi: "020601", desc: "Materials inadequats per al consum o l'elaboració" },
    { codi: "020603", desc: "Llots del tractament in situ d'efluents" },
    { codi: "020704", desc: "Materials inadequats per al consum o l'elaboració" },
    { codi: "020705", desc: "Llots del tractament in situ d'efluents" },
    { codi: "030305", desc: "Llots de destinats procedents del reciclatge de paper" },
    { codi: "030311", desc: "Llots del tractament in situ d'efluents, diferents dels especificats en el codi 030310" },
    { codi: "040104", desc: "Residus líquids d'adob que contenen crom" },
    { codi: "040105", desc: "Residus líquids d'adob que no contenen crom" },
    { codi: "040106", desc: "Llots, en particular els procedents del tractament insitu d'efluents, que contenen crom" },
    { codi: "040107", desc: "Llots, en particular els procedents del tractament insitu d'efluents, que no contenen crom" },
    { codi: "040220", desc: "Llots del tractament in situ d’efluents diferents dels especificats en el codi 040219" },
    { codi: "060603", desc: "Residus que contenen sulfurs diferents dels esmentats en el codi 060602" },
    { codi: "070112", desc: "Llots del tractament in situ d’efluents diferents dels especificats en el codi 070111" },
    { codi: "070212", desc: "Llots del tractament in situ d’efluents diferents dels especificats en el codi 070211" },
    { codi: "070312", desc: "Llots del tractament in situ d’efluents diferents dels especificats en el codi 070311" },
    { codi: "070512", desc: "Llots del tractament in situ d’efluents diferents dels especificats en el codi 070511" },
    { codi: "070612", desc: "Llots del tractament in situ d’efluents diferents dels especificats en el codi 070611" },
    { codi: "070712", desc: "Llots del tractament in situ d’efluents diferents dels especificats en el codi 070711" },
    { codi: "080112", desc: "Residu de pintura i vernís diferent dels especificats en el codi 080111" },
    { codi: "080120", desc: "Suspensions aquoses que contenen pintura o vernís diferents de les especificades en el codi 080119" },
    { codi: "080308", desc: "Residus líquids aquosos que contenen tinta" },
    { codi: "110112", desc: "Líquids aquosos d'esbandida diferents dels especificats en el codi 110111" },
    { codi: "161002", desc: "Residus líquids aquosos diferents dels especificats en el codi 161001" },
    { codi: "161004", desc: "Concentrats aquosos diferents del especificats en el codi 161003" },
    { codi: "170506", desc: "Llots de drenatge diferents dels especificats en el codi 170505" },
    { codi: "190206", desc: "Llots de tractament fisicoquímics diferents dels especificats en el codi 190205" },
    { codi: "190603", desc: "Licors del tractament anaeròbic de residus municipals" },
    { codi: "190605", desc: "Licors del tractament anaeròbic de residus animals i vegetals" },
    { codi: "190703", desc: "Lixiviats d'abocador diferents dels especificats en el codi 190702" },
    { codi: "190805", desc: "Llots de tractament d'aigües residuals urbanes" },
    { codi: "190809", desc: "Mescles de greixos i olis procedents de la separació d'aigua/substàncies olioses que contenen únicament olis i greixos comestibles" },
    { codi: "190812", desc: "Llots procedents del tractament biològic d'aigües residuals industrials diferents dels especificats en el codi 190811" },
    { codi: "190814", desc: "Llots procedents d'altres tractaments d'aigües residuals industrials diferents dels especificats en el codi 190813" },
    { codi: "190902", desc: "Llots de la clarificació de l'aigua" },
    { codi: "200304", desc: "Llots de fosses sèptiques" },
    { codi: "200306", desc: "Residus de la neteja de clavegueres" },
  ];

  return (
    <div className="table-wrapper">
      <div className="table-top"></div>
    <div className="table-container">
      <div className="app-table">
        <div className="table-header">
          <div className="header-cell">
            <div className="table-header-content">
              <p>CODI LER</p>
            </div>
          </div>
          <div className="header-cell">
            <div className="table-header-content">
              <p>DESCRIPCIÓ</p>
            </div>
          </div>
        </div>
        <div className="table-body">
          {tableData.map((item) => (
            <div key={item.codi} className="table-row">
              <div className="table-cell">
                <span className="CodeTag">{item.codi}</span>
              </div>
              <div className="table-cell">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

//   return (
//     <div className="table-container">
//       <table className="app-table">
//         <thead>
//           <tr className="table-header">
//             <th>
//               <div className="table-header-content">
//                <p>CODI LER</p>
//               </div>
//             </th>
//             <th>
//               <div className="table-header-content">
//                 <p>DESCRIPCIÓ</p>
//               </div>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="table-body">
//           {tableData.map((item) => (
//             <tr key={item.codi}>
//               <td className="table-cell">
//                 <span className="CodeTag">{item.codi}</span>
//               </td>
//               <td className="table-cell">
//                 {item.desc}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default Table;