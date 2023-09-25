import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'PHYSICAL Mode of Delivery:',
    text: 'The course fee for the fully PHYSICAL mode of delivery is INR. 90,000/- plus Goods and Service Tax (GST) as applicable by Government of India (GOI).Thecourse fees for PG-DAC course has to be paid in two installments as per the schedule.First installment is INR. 10,000/- plus Goods and Service Tax (GST) as applicable by GOI.Second installment is INR. 80,000/- plus Goods and Service Tax (GST) as applicable by GOI.',
  },
  {
    title: 'ONLINE Mode of Delivery:',
    text: 'The course fee of the fully ONLINE mode of delivery is INR. 76,500/- plus Goods and Service Tax (GST) as applicable by GOI.The course fees for PG-DAC course has to be paid in two installments as per the schedule.First installment is INR. 10,000/- plus Goods and Service Tax (GST) as applicable by GOI.Second installment is INR. 66,500/- plus Goods and Service Tax (GST) as applicable by GOI.',
  },
  {
    title: 'Installment course fee',
    text: 'The course fee includes expenses towards delivering classes, conducting examinations, final mark-list and certificate, and placement assistance provided.The first installment course fee of Rs 10,000/- + GST on it as applicable at the time of payment is to be paid online as per the schedule. It can be paid using credit/debit cards through the payment gateway. The first installment of the course fees is to be paid after seat is allocated during counseling rounds.The second installment of the course fees is to be paid before the course commencement through NEFT.',
  },
  {
    title: 'NOTE:',
    text: ' Candidates may take note that no Demand Draft (DD) or cheque or cash will be accepted at any C-DAC training centre towards payment of any installment of course fees.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Course Fees</h1>
      <p>The Post Graduate Diploma in Advanced Computing (PG-DAC) course will be delivered in fully ONLINE or fully PHYSICAL mode. The total course fee and payment details for the fully PHYSICAL or fully ONLINE mode of delivery is as detailed herein below:</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
