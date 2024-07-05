import { Button, Input } from 'antd'
import { useContext, useState } from 'react';
import CandidateContext from '../../Providers/Candidate';


const PostmanAdd = () => {

     const {sendpostman,addpostmanbutton,setJsonData,jsonData}=useContext(CandidateContext)

  
    const [parsedData, setParsedData] = useState(null);
   
    const handleInputChange = (event) => {
      setJsonData(event.target.value);
    };
   
    const handleParseJson = () => {
      try {
        const parsedJson = JSON.parse(jsonData);
        setParsedData(parsedJson);
        sendpostman(parsedJson)

      } catch (error) {
        console.error('Error parsing JSON:', error);
        setParsedData(null);
      }
    };
  return (
  <>
      <Input.TextArea
       value={jsonData}
     className='m_t_10'
    onChange={handleInputChange}
   placeholder='Paste Candidate Details ................'
   autoSize={{ minRows: 25, maxRows: 25 }}
   />
     <div
        style={{
          margin: "10px",
          display: "flex",
          gap: "10px",
          justifyContent: "flex-end",
        }}
      >
        <Button className="btn_cancel">Cancel</Button>
        <Button type="primary" className="btn" onClick={handleParseJson}
         loading={addpostmanbutton}>
          Save
        </Button> 
      </div>
  </>

   
   

  )
}

export default PostmanAdd