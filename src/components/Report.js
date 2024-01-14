import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import CloudGif from '../animations/cloud.gif'

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
                <div style={{ margin: '40px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
                        Showroom_location<br />
                        Program_Conducted_on</p></center>

                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Program Supported by</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style={{ height: "200px", width: '200px', }} />
                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style={{ height: "200px", width: '200px', }} />
                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style={{ height: "200px", width: '200px', }} />
                    </div>

                    <p> Program Organized & ReportSubmitted by<br />
                        Shri. S Sundaramoorthy | Empanelled Consultant with TNSDA | Representing VRNC| technical@vrnc.in | +91-8285172109 | www.vrnc.in</p>

                    <h2 style={{ fontSize: '25px' }}>Program Summary</h2>

                    <p>The Government of India set up the Bureau of Energy Efficiency (BEE). on 1st March 2002 under the provisions of the Energy Conservation Act, 2001. The mission of the Bureau of Energy Efficiency is to assist in developing policies and strategies with a thrust on self-regulation and market principles, within the overall framework of the Energy Conservation Act, 2001 with the primary objective of reducing energy intensity of the Indian economy.</p>

                    <p>The Energy Conservation (EC) Act 2001 mandates the creation of a two-tier organizational structure to promote the efficient use of energy and its conservation in the country with the Bureau of Energy Efficiency (BEE) as the nodal agency at the central level and State Designated Agencies (SDAs) as nodal agencies at State / Union Territory (UT) level.</p>

                    <p>TANGEDCO has notified its Demand Side Management (DSM) wing as Tamil Nadu State Designated Agency (TNSDA) for carrying out energy conservation activities and implementing related schemes.</p>

                    <h2 style={{ fontSize: '25px' }}>Program Objective</h2>
                    <p>BEE is implementing the Standards & Labelling program (Star Labelling) to provide the consumer with an informed choice about energy saving and thereby the cost-saving potential of the marketed household and other equipment. As of date, Star labels are affixed to 35 categories of appliances, mostly household appliances.</p>
                    <p>TANGEDCO as TNSDA at the Tamil Nadu state level, encourages the retailers/ traders/ sales officers/ associated people to home appliance sales to participate in this training program to be aware of this scheme, compliances linked with their shop and how to guide consumers to choose energy-efficient home appliance</p>

                    <h2>Showroom Photo</h2>

                    <img src={reportData.showroomphoto} height="200px" width="300px" />

                    <h2>Program Banner</h2>

                    <p>Showroom Name Address No of Participants Date</p>

                    <h2>Participants List (Attendance Sheet)</h2>

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

                    <img src="" />

                    <h2>Training Session Photo</h2>

                    <img src="" />

                    <h2>Training Session Photo</h2>

                    <img src="" />

                    <h2>Training Session Photo</h2>

                    <img src="" />

                    <h2>QA Session Photo</h2>

                    <img src="" />

                    <h2>Refreshments Session Photo</h2>

                    <img src="" />

                    <h2>Honouring Chief Guest Session Photo</h2>

                    <img src="" />

                    <h2>Group Photo</h2>

                    <img src="" />

                </div>
            )}
        </div>
    );
}

export default Report;