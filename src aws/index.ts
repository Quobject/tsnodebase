import * as request from 'request';
import * as fs from 'fs';
import * as path from 'path';

export class QuizCreateResponse {
  public static FromString(value: string): QuizCreateResponse {
    const resp: any = JSON.parse(value);
    const result = new QuizCreateResponse(resp);

    return result;
  }

  public shortid: string;
  public signiture: string;
  public policy: string;
  public date: string;
  public build: string;
  public userid: string;
  public quizid: number;
  public publickey: number;

  constructor(jo: any) {
    this.shortid = jo.Shortid;
    this.signiture = jo.Signiture;
    this.date = jo.Date;
    this.policy = jo.Policy;
    this.build = jo.Build;
    this.userid = jo.Userid;
    this.quizid = jo.Quizid;
    this.publickey = jo.PublicKey;
  }

}

export class AWSPost {

  public static RequestPost(): Promise<any> {

    /* tslint:disable:max-line-length */
    const s = '{  "Shortid": "baaab",  "Signiture": "8fcb9b1486c70ab310fc2f9af37536851459591ae5ebd190ea2a205ee8850998",  "Policy": "ewogICJleHBpcmF0aW9uIjogIjIwMTctMDctMTBUMTI6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsKICAgICAgImJ1Y2tldCI6ICJwcm9kdWN0aW9uLXVzLWVhc3QtMS5xdW9iamVjdC5pbyIKICAgIH0sCiAgICBbCiAgICAgICJzdGFydHMtd2l0aCIsCiAgICAgICIka2V5IiwKICAgICAgInF1aXovNTk2MTNlNDhiMDYwOWQwMDAxZWZkODI5LyIKICAgIF0sCiAgICB7CiAgICAgICJhY2wiOiAicHJpdmF0ZSIKICAgIH0sCiAgICBbCiAgICAgICJzdGFydHMtd2l0aCIsCiAgICAgICIkQ29udGVudC1UeXBlIiwKICAgICAgImltYWdlLyIKICAgIF0sCiAgICB7CiAgICAgICJ4LWFtei1tZXRhLXV1aWQiOiAiMzVjMzljM2ItNTNlMy00YjdiLTkyY2ItN2U4YWExNDdmOGU2IgogICAgfSwKICAgIHsKICAgICAgIngtYW16LXNlcnZlci1zaWRlLWVuY3J5cHRpb24iOiAiQUVTMjU2IgogICAgfSwKICAgIHsKICAgICAgIngtYW16LWNyZWRlbnRpYWwiOiAiQUtJQUlLTTdVWkVJREU2MzI0SlEvMjAxNzA3MDkvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCIKICAgIH0sCiAgICB7CiAgICAgICJ4LWFtei1hbGdvcml0aG0iOiAiQVdTNC1ITUFDLVNIQTI1NiIKICAgIH0sCiAgICB7CiAgICAgICJ4LWFtei1kYXRlIjogIjIwMTcwNzA5VDAwMDAwMFoiCiAgICB9CiAgXQp9",  "Date": "20170709",  "Build": "production",  "Userid": "35c39c3b-53e3-4b7b-92cb-7e8aa147f8e6",  "Quizid": "59613e48b0609d0001efd829",  "PublicKey": "AKIAIKM7UZEIDE6324JQ"}';
    /* tslint:enable:max-line-length */

    //console.log(s);
    const qres = QuizCreateResponse.FromString(s);
    //console.log(response);

  
  

    return Promise.resolve().then(() => {    
      const filename = path.join(__dirname, '..', 'quiz1.quiz');
      console.log(`filename = ${filename}`);

      //fs.createReadStream(filename).pipe(process.stdout, { end: false });

      var formData = {
        key: `quiz/${qres.quizid}/q.quiz`,
        acl: 'private',
        'Content-Type': 'image/',
        'x-amz-meta-uuid': qres.userid,
        'x-amz-server-side-encryption': 'AES256',
        'X-Amz-Credential': `${qres.publickey}/${qres.date}/us-east-1/s3/aws4_request`,
        'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
        'X-Amz-Date': `${qres.date}T000000Z`,
        Policy: qres.policy,
        'X-Amz-Signature': qres.signiture,
      
        file: fs.createReadStream(filename),
      };

      console.log(formData);

      return new Promise((resolve, reject) => {
        request.post({
          url: 'http://production-us-east-1.quobject.io.s3.amazonaws.com/',
          formData: formData,
          proxy: 'http://127.0.0.1:8888'
        }, (err, httpResponse, body) => {
          if (err) {
            console.error('upload failed:', err);
            reject(err);
            return; 
          }
          console.log('Upload successful!  Server responded with:', body);
          resolve(body);
        });

      });

    }).then(() => {
      console.log('ready123456');
    });
  }

}
