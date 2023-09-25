import axios from "axios";
// import { log } from "../../utils/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DownloadFile() {
  const [imageData, setImageData] = useState("");
  const navigate = useNavigate();
  var facId = sessionStorage.getItem('id');
  const longStudId = parseInt(facId, 10);

  useEffect(() => {
            axios.get(`http://localhost:7070/student/images/${facId}`, { responseType: "arraybuffer" })
                .then(response => {
                    const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
                    const imageUrl = URL.createObjectURL(imageBlob);
                    setImageData(imageUrl);
                })
                .catch(error => {
                    console.error("Error fetching image:", error);
                });
        }, []);

    return (
        <div className="container">
            <img src={imageData} alt="Image"style={{ width: 150, height: 150 ,marginLeft:-20}} />
        </div>
    );

}

export default DownloadFile;