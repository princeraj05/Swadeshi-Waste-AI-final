// import React from "react";
// import { useLocation, Link } from "react-router-dom";

// export default function Result() {
//   const { state } = useLocation();
//   const preview = state?.preview || "";

//   return (
//     <main className="main-content pt-24">
//       <section className="container py-12">
//         <h2 className="h2 text-center h1-color mb-6">Detailed Report</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="card">
//             {preview ? <img src={preview} alt="preview" className="w-full rounded" /> : <div className="text-secondary">No image provided.</div>}
//           </div>

//           <div className="card md:col-span-2">
//             <h3 className="font-semibold text-lg">Analysis (Simulated)</h3>
//             <p className="text-secondary mt-2">This page shows a more detailed, printable view. When you connect a real model, we will show full metrics here.</p>

//             <div className="mt-6">
//               <ul className="list-disc pl-5 text-secondary">
//                 <li><strong>Type:</strong> Plastic Bottle (PET)</li>
//                 <li><strong>Recyclable:</strong> Yes</li>
//                 <li><strong>Compostable:</strong> No</li>
//                 <li><strong>Decomposition:</strong> ~400–500 years</li>
//               </ul>
//             </div>

//             <div className="mt-6">
//               <Link to="/upload" className="btn-outline">Back to Chat</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const analysis = state?.analysis;
  const preview = state?.preview;

  if (!analysis) return <div className="pt-24 text-center">No data found</div>;

  return (
    <main className="pt-24 p-6">
      <img src={preview} className="max-h-72 rounded mb-4" />

      {analysis.wasteItems?.map((i, idx) => (
        <p key={idx}><b>{i.item}</b> - {i.material}</p>
      ))}

      <ul className="list-disc ml-6 mt-3">
        {analysis.analysis?.map((e, i) =>
          e.steps.map((s, j) => <li key={`${i}-${j}`}>{s}</li>)
        )}
      </ul>

      <Link to="/history" className="mt-4 inline-block underline">Back</Link>
    </main>
  );
}
