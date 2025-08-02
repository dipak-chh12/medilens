import React from 'react';
import Block from './Block';

const ResultBlocks = ({ result }) => {
  if (!result) return null;
  const {
    patientDetails = {},
    reportDetails = {},
    summary = '',
    abnormalities = '',
    recommendedMedicines = '',
    recommendedDiet = '',
    advisory = {},
    disclaimer = '',
  } = result;

  return (
    <section className="py-10 px-2 max-w-2xl mx-auto">
      <Block title="Patient Details">
        <div className="flex flex-wrap gap-4">
          <div><span className="font-medium">Name:</span> {patientDetails.name || '-'}</div>
          <div><span className="font-medium">Sex:</span> {patientDetails.sex || '-'}</div>
          <div><span className="font-medium">Age:</span> {patientDetails.age || '-'}</div>
        </div>
      </Block>
      <Block title="Report Details">
        <div className="flex flex-wrap gap-4">
          <div><span className="font-medium">Report ID:</span> {reportDetails.reportId || '-'}</div>
          <div><span className="font-medium">Hospital:</span> {reportDetails.hospitalName || '-'}</div>
          <div><span className="font-medium">Doctor:</span> {reportDetails.doctorName || '-'}</div>
          <div><span className="font-medium">Report Date:</span> {reportDetails.reportDate || '-'}</div>
          <div><span className="font-medium">Collected On:</span> {reportDetails.collectedOn || '-'}</div>
          <div><span className="font-medium">Test Type:</span> {reportDetails.testType || '-'}</div>
          {reportDetails.other && <div><span className="font-medium">Other:</span> {reportDetails.other}</div>}
        </div>
      </Block>
      <Block title="Summary">
        <div>{summary ? `This is a summary of the report: ${summary}` : '-' }</div>
      </Block>
      <Block 
        title={abnormalities ? "Abnormalities Found" : "No Abnormalities Found"}
        status={abnormalities ? 'warning' : 'success'}
      >
        <div>{abnormalities ? `The following abnormalities were found: ${abnormalities}` : 'Everything is fine as per the report.'}</div>
      </Block>
      {recommendedMedicines && (
        <Block title="Recommended Medicines">
          <div>{recommendedMedicines}</div>
          {disclaimer && <div className="mt-2 text-xs text-gray-500 italic">{disclaimer}</div>}
        </Block>
      )}
      {recommendedDiet && (
        <Block title="Recommended Diet">
          <div>{recommendedDiet}</div>
        </Block>
      )}
      {advisory && (advisory.dos || advisory.donts) && (
        <Block title="Advisory">
          <div className="flex flex-col gap-2">
            {advisory.dos && <div><span className="font-medium">Do's:</span> {advisory.dos}</div>}
            {advisory.donts && <div><span className="font-medium">Don'ts:</span> {advisory.donts}</div>}
          </div>
        </Block>
      )}
    </section>
  );
};

export default ResultBlocks;