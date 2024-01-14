import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import CloudGif from '../animations/cloud.gif'
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/logo2.png'
import Logo3 from '../images/logo3.png'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';



function Report() {

    const { id } = useParams();
    const [reportData, setReportData] = useState(null);
    const [base64String, setBase64String] = useState('');

    useEffect(() => {
        // CHECK WEATHER ID IS GETTING OR NOT
        if (id) {
            fetch(`http://localhost:3001/api/report?id=${id}`)
                .then((response) => response.json())
                .then((data) => setReportData(data))
                .catch((error) => console.error(error))
    
        } else {
            console.log("NOT GETTING ID")
        }
    }, [id]);

       const bufferToBase64 = (buffer) => {
        return buffer ? buffer.toString('base64') : '';
    };

    const handleGeneratePdf = () => {
        window.print()
    };

      

    return (
        <div className="report">
            
            {reportData == null ? (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img src={CloudGif} alt="" height="300px" width="400px" />
                        <p style={{ fontSize: '20px', color: 'grey', marginTop: '-70px' }}>Fetching data from Cloud</p>
                    </div>
                </>
            ) : (
                <div id="pdfContent" style={{ margin: '100px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold' }}>BEE – TNSDA Retailer Training Program </p> <p>{reportData.showroom}</p>
                    </div>

                    <hr style={{ height: '.5px', background: 'blue', width: '90%', marginTop: '-12px' }} />

                    <center><h2>Awareness cum Training Program on <br />
                        Energy Efficiency and Star Labelling of <br />
                        Home Appliances to the Retailers / Traders<br />
                        At M/S {reportData.showroom}</h2>
                    </center>

                    <center>
                    <img src={reportData.ephoto} alt="Your Image" height="200px" width="300px" />
                    </center>

                    <center><p>Location<br />
                        {reportData.location}<br />
                        {reportData.date}</p></center>

                        <hr style={{ height: '.5px', background: 'blue', width: '90%', }} />
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Program Supported by</p>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width:'50%' }}>
                        <img src={Logo1} style={{ height: "100px", width: '100px', }} />
                        <img src={Logo2} style={{ height: "70px", width: '150px',marginTop:'20px' }} />
                        <img src={Logo3} style={{ height: "100px", width: '100px', }} />
                    </div>
                    </div>
                    <hr style={{ height: '.5px', background: 'blue', width: '90%',  }} />

                    <p style={{textAlign:'center',fontWeight:'bold'}}>  Program Organized & ReportSubmitted by<br />
                        Shri. S Sundaramoorthy | Empanelled Consultant with TNSDA | Representing VRNC| <br />
                        <a href="#">technical@vrnc.in </a> | <a href="#"> +91-8285172109 </a> | <a href="#">www.vrnc.in</a> </p>

                    <h2 style={{ fontSize: '25px' }}>Program Summary</h2>

                    <p>The Government of India set up the Bureau of Energy Efficiency (BEE). on 1st March 2002 under the provisions of the Energy Conservation Act, 2001. The mission of the Bureau of Energy Efficiency is to assist in developing policies and strategies with a thrust on self-regulation and market principles, within the overall framework of the Energy Conservation Act, 2001 with the primary objective of reducing energy intensity of the Indian economy.</p>

                    <p>The Energy Conservation (EC) Act 2001 mandates the creation of a two-tier organizational structure to promote the efficient use of energy and its conservation in the country with the Bureau of Energy Efficiency (BEE) as the nodal agency at the central level and State Designated Agencies (SDAs) as nodal agencies at State / Union Territory (UT) level.</p>

                    <p>TANGEDCO has notified its Demand Side Management (DSM) wing as Tamil Nadu State Designated Agency (TNSDA) for carrying out energy conservation activities and implementing related schemes.</p>

                    <h2 style={{ fontSize: '20px' }}>Program Objective</h2>
                    <p>BEE is implementing the Standards & Labelling program (Star Labelling) to provide the consumer with an informed choice about energy saving and thereby the cost-saving potential of the marketed household and other equipment. As of date, Star labels are affixed to 35 categories of appliances, mostly household appliances.</p>
                    <p>TANGEDCO as TNSDA at the Tamil Nadu state level, encourages the retailers/ traders/ sales officers/ associated people to home appliance sales to participate in this training program to be aware of this scheme, compliances linked with their shop and how to guide consumers to choose energy-efficient home appliance</p>

                    <h2 style={{ fontSize: '20px' }}>Showroom Photo</h2>
                    <img src={reportData.showroomphoto} height="300px" width="400px" />

                    <h2 style={{ fontSize: '20px' }}>Program Banner</h2>
                    <img src={reportData.programbanner} height="300px" width="400px" />

                    {/* <p>Showroom Name Address No of Participants Date</p> */}

                    <h2 style={{ fontSize: '20px' }}>Participants List (Attendance Sheet)</h2>
                    <img src={reportData.participantslist} height="300px" width="400px" />
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Mobile No</th>
                            <th>Email ID</th>
                            <th>Signature</th>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto1} height="300px" width="400px" />

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto2} height="300px" width="400px" /> <img src="" />

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto3} height="300px" width="400px" />

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto4} height="300px" width="400px" />

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto5} height="300px" width="400px" />

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto6} height="300px" width="400px" />

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto7} height="300px" width="400px" />

                    <h2>Training Session Photo</h2>
                    <img src={reportData.trainingphoto8} height="300px" width="400px" />

                    <h2>QA Session Photo</h2>
                    <img src={reportData.qasectionphoto} height="300px" width="400px" />

                    <h2>Refreshments Session Photo</h2>
                    <img src={reportData.refreshsectionphoto} height="300px" width="400px" />

                    <h2>Honouring Chief Guest Session Photo</h2>
                    <img src={reportData.honouringphoto1} height="300px" width="400px" />

                    <h2>Honouring Chief Guest Session Photo</h2>
                    <img src={reportData.honouringphoto2} height="300px" width="400px" />

                    <h2>Group Photo</h2>
                    <img src={reportData.groupphoto} height="300px" width="400px" />

                </div>
            )}
            <button onClick={handleGeneratePdf}>Generate PDF</button>
        </div>
        
    );
}

export default Report;