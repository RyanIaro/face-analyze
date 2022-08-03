import { useState } from "react";
import AnonLog from "./AnonLog";
import AWS from 'aws-sdk';
import { float } from "aws-sdk/clients/lightsail";

function Input() {
  const [image, setImage] = useState<undefined | string>();
  const [lowAge, setLowAge] = useState<undefined | number>();
  const [highAge, setHighAge] = useState<undefined | number>();
  const [beardValue, setBeardValue] = useState<undefined | boolean>();
  const [beardConfidence, setBeardConfidence] = useState<undefined | float>();
  const [eyeGlassesValue, setEyeGlassesValue] = useState<undefined | boolean>();
  const [eyeGlassesConfidence, setEyeGlassesConfidence] = useState<undefined | float>();
  const [eyesOpenValue, setEyesOpenValue] = useState<undefined | boolean>();
  const [eyesOpenConfidence, setEyesOpenConfidence] = useState<undefined | float>();
  const [gender, setGender] = useState<undefined | string>();
  const [genderConfidence, setGenderConfidence] = useState<undefined | float>();
  const [mouthOpenValue, setMouthOpenValue] = useState<undefined | boolean>();
  const [mouthOpenConfidence, setMouthOpenConfidence] = useState<undefined | float>();
  const [mustacheValue, setMustacheValue] = useState<undefined | boolean>();
  const [mustacheConfidence, setMustacheConfidence] = useState<undefined | float>();
  const [smileValue, setSmileValue] = useState<undefined | boolean>();
  const [smileConfidence, setSmileConfidence] = useState<undefined | float>();
  const [sunGlassesValue, setSunGlassesValue] = useState<undefined | boolean>();
  const [sunGlassesConfidence, setSunGlassesConfidence] = useState<undefined | float>();
  const [emotion1, setEmotion1] = useState<undefined | string>();
  const [emotion1Confidence, setEmotion1Confidence] = useState<undefined | float>();
  const [emotion2, setEmotion2] = useState<undefined | string>();
  const [emotion2Confidence, setEmotion2Confidence] = useState<undefined | float>();
  const [emotion3, setEmotion3] = useState<undefined | string>();
  const [emotion3Confidence, setEmotion3Confidence] = useState<undefined | float>();
  const [emotion4, setEmotion4] = useState<undefined | string>();
  const [emotion4Confidence, setEmotion4Confidence] = useState<undefined | float>();
  const [emotion5, setEmotion5] = useState<undefined | string>();
  const [emotion5Confidence, setEmotion5Confidence] = useState<undefined | float>();
  const [emotion6, setEmotion6] = useState<undefined | string>();
  const [emotion6Confidence, setEmotion6Confidence] = useState<undefined | float>();
  const [emotion7, setEmotion7] = useState<undefined | string>();
  const [emotion7Confidence, setEmotion7Confidence] = useState<undefined | float>();
  const [emotion8, setEmotion8] = useState<undefined | string>();
  const [emotion8Confidence, setEmotion8Confidence] = useState<undefined | float>();
  const [height, setHeight] = useState<undefined | float>();
  const [left, setLeft] = useState<undefined | float>();
  const [top, setTop] = useState<undefined | float>();
  const [width, setWidth] = useState<undefined | float>();
  const [pitch, setPitch] = useState<undefined | float>();
  const [roll, setRoll] = useState<undefined | float>();
  const [yaw, setYaw] = useState<undefined | float>();
  const [brightness, setBrightness] = useState<undefined | float>();
  const [sharpness, setSharpness] = useState<undefined | float>();
  const [confidence, setConfidence] = useState<undefined | float>();

    const DetectFaces = (imageData: string) => {
      var rekognition = new AWS.Rekognition();
      var params = {
        Image: {
          Bytes: imageData
        },
        Attributes: [
          'ALL',
        ]
      };
    rekognition.detectFaces(params, function (err: any, data: any) {
      if (err) console.log(err, err.stack);
      else {
        console.log(data.FaceDetails);
        setLowAge(data.FaceDetails[0].AgeRange.Low);
        setHighAge(data.FaceDetails[0].AgeRange.High);
        setBeardValue(data.FaceDetails[0].Beard.Value.toString());
        setBeardConfidence(data.FaceDetails[0].Beard.Confidence);
        setEyeGlassesValue(data.FaceDetails[0].Eyeglasses.Value.toString());
        setEyeGlassesConfidence(data.FaceDetails[0].Eyeglasses.Confidence);
        setEyesOpenValue(data.FaceDetails[0].EyesOpen.Value.toString());
        setEyesOpenConfidence(data.FaceDetails[0].EyesOpen.Confidence);
        setGender(data.FaceDetails[0].Gender.Value);
        setGenderConfidence(data.FaceDetails[0].Gender.Confidence);
        setMouthOpenValue(data.FaceDetails[0].MouthOpen.Value.toString());
        setMouthOpenConfidence(data.FaceDetails[0].MouthOpen.Confidence);
        setMustacheValue(data.FaceDetails[0].Mustache.Value.toString());
        setMustacheConfidence(data.FaceDetails[0].Mustache.Confidence);
        setSmileValue(data.FaceDetails[0].Smile.Value.toString());
        setSmileConfidence(data.FaceDetails[0].Smile.Confidence);
        setSunGlassesValue(data.FaceDetails[0].Sunglasses.Value.toString());
        setSunGlassesConfidence(data.FaceDetails[0].Sunglasses.Confidence);
        setEmotion1(data.FaceDetails[0].Emotions[0].Type.toString());
        setEmotion1Confidence(data.FaceDetails[0].Emotions[0].Confidence);
        setEmotion2(data.FaceDetails[0].Emotions[1].Type.toString());
        setEmotion2Confidence(data.FaceDetails[0].Emotions[1].Confidence);
        setEmotion3(data.FaceDetails[0].Emotions[2].Type.toString());
        setEmotion3Confidence(data.FaceDetails[0].Emotions[2].Confidence);
        setEmotion4(data.FaceDetails[0].Emotions[3].Type.toString());
        setEmotion4Confidence(data.FaceDetails[0].Emotions[3].Confidence);
        setEmotion5(data.FaceDetails[0].Emotions[4].Type.toString());
        setEmotion5Confidence(data.FaceDetails[0].Emotions[4].Confidence);
        setEmotion6(data.FaceDetails[0].Emotions[5].Type.toString());
        setEmotion6Confidence(data.FaceDetails[0].Emotions[5].Confidence);
        setEmotion7(data.FaceDetails[0].Emotions[6].Type.toString());
        setEmotion7Confidence(data.FaceDetails[0].Emotions[6].Confidence);
        setEmotion8(data.FaceDetails[0].Emotions[7].Type.toString());
        setEmotion8Confidence(data.FaceDetails[0].Emotions[7].Confidence);
        setHeight(data.FaceDetails[0].BoundingBox.Height);
        setLeft(data.FaceDetails[0].BoundingBox.Left);
        setTop(data.FaceDetails[0].BoundingBox.Top);
        setWidth(data.FaceDetails[0].BoundingBox.Width);
        setPitch(data.FaceDetails[0].Pose.Pitch);
        setRoll(data.FaceDetails[0].Pose.Roll);
        setYaw(data.FaceDetails[0].Pose.Yaw);
        setBrightness(data.FaceDetails[0].Quality.Brightness);
        setSharpness(data.FaceDetails[0].Quality.Sharpness);
        setConfidence(data.FaceDetails[0].Confidence);
      }
    });
    }

    const ProcessImage = (event: any) => {
      const file: any = event.target.files[0];
      setImage( URL.createObjectURL(event.target.files[0]));
      AnonLog();

      var reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e: any) {
          var image: any = null;      
          var jpg = true;
          try {
            image = atob(e.target.result.split("data:image/jpeg;base64,")[1]);
  
          } catch (e) {
            jpg = false;
          }
          if (jpg == false) {
            try {
              image = atob(e.target.result.split("data:image/png;base64,")[1]);
            } catch (e) {
              alert("Not an image file Rekognition can process");
              return;
            }
          }

          var length = image.length;
          var imageBytes: any = new ArrayBuffer(length);
          var ua = new Uint8Array(imageBytes);
          for (var i = 0; i < length; i++) {
            ua[i] = image.charCodeAt(i);
          }
          DetectFaces(imageBytes);
        };
      })(file);
      reader.readAsDataURL(file);
    } 

    return (
      <>
        <div className="container">
          <div className="leftContainer">
            <div className="inputFile">
              <input type="file" className="inputImage" onChange={ProcessImage}/>           
            </div>
            <div className="Image">
              {
                image === undefined ? 
                <p>Choose a picture</p> :
                <img src={image}/>
              }
            </div>
          </div>
          {
            image !== undefined && 
            <div className="rightContainer">
              <table>
                <tbody>
                  <tr>
                    <td>-AgeRange</td>
                    <td>
                      <ul>
                        <li>Between {lowAge} and {highAge}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Beard</td>
                    <td>
                      <ul>
                        <li>{beardValue}</li>
                        <li>Confidence: {beardConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Eyeglasses</td>
                    <td>
                      <ul>
                        <li>{eyeGlassesValue}</li>
                        <li>Confidence: {eyeGlassesConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Eyes open</td>
                    <td>
                      <ul>
                        <li>{eyesOpenValue}</li>
                        <li>Confidence: {eyesOpenConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Gender</td>
                    <td>
                      <ul>
                        <li>{gender}</li>
                        <li>Confidence: {genderConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Mouth open</td>
                    <td>
                      <ul>
                        <li>{mouthOpenValue}</li>
                        <li>Confidence: {mouthOpenConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Mustache</td>
                    <td>
                      <ul>
                        <li>{mustacheValue}</li>
                        <li>Confidence: {mustacheConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Smile</td>
                    <td>
                      <ul>
                        <li>{smileValue}</li>
                        <li>Confidence: {smileConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Sunglasses</td>
                    <td>
                      <ul>
                        <li>{sunGlassesValue}</li>
                        <li>Confidence: {sunGlassesConfidence}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Emotions</td>
                      <table>
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Confidence</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{emotion1}: </td>
                            <td>{emotion1Confidence}</td>
                          </tr>
                          <tr>
                            <td>{emotion2}: </td>
                            <td>{emotion2Confidence}</td>
                          </tr>
                          <tr>
                            <td>{emotion3}: </td>
                            <td>{emotion3Confidence}</td>
                          </tr>
                          <tr>
                            <td>{emotion4}: </td>
                            <td>{emotion4Confidence}</td>
                          </tr>
                          <tr>
                            <td>{emotion5}: </td>
                            <td>{emotion5Confidence}</td>
                          </tr>
                          <tr>
                            <td>{emotion6}: </td>
                            <td>{emotion6Confidence}</td>
                          </tr>
                          <tr>
                            <td>{emotion7}: </td>
                            <td>{emotion7Confidence}</td>
                          </tr>
                          <tr>
                            <td>{emotion8}: </td>
                            <td>{emotion8Confidence}</td>
                          </tr>
                        </tbody>
                      </table>
                  </tr>
                  <tr>
                    <td>-Bounding Box</td>
                    <td>
                      <ul>
                        <li>Height: {height}</li>
                        <li>Left: {left}</li>
                        <li>Top: {top}</li>
                        <li>Width: {width}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Pose</td>
                    <td>
                      <ul>
                        <li>Pitch: {pitch}</li>
                        <li>Roll: {roll}</li>
                        <li>Yaw: {yaw}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Quality</td>
                    <td>
                      <ul>
                        <li>Brightness: {brightness}</li>
                        <li>Sharpness: {sharpness}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>-Confidence</td>
                    <td>{confidence}</td>
                  </tr>
                </tbody>
              </table>
          </div>
          }
        </div>
      </>
    );
  }
  
  export default Input;