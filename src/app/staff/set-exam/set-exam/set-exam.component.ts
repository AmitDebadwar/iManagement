import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { FetchSetExamQuestionsService } from './fetch-set-exam-questions.service';
import { Constants } from 'src/app/common/constants';


 
export class Chapter {
  public number: number;
  public name: string;
}


@Component({
  selector: 'app-set-exam',
  templateUrl: './set-exam.component.html',
  styleUrls: ['./set-exam.component.scss']
})
export class SetExamComponent implements OnInit {
  selectedChapter : any;
  chapters: Array<Chapter> = new Array<Chapter>();
  questions = [];
  constructor(private fetchSetExamQuestions : FetchSetExamQuestionsService) { }

  ngOnInit() {

  }

  onChapterChange(){
    this.getQuestions();
  }

 getQuestions(){
   this.questions = 
  
   [
    {
      "question": "Aute fugiat aute voluptate esse Lorem id irure.",
      "id": "799617fd-4db3-4f45-b563-441fcc14f55b",
      "level": 5
    },
    {
      "question": "Veniam pariatur nulla minim fugiat aute pariatur non voluptate.",
      "id": "90ddf8bb-361a-4c7f-b591-6215ff3d85a9",
      "level": 1
    },
    {
      "question": "Voluptate Lorem anim aliquip cupidatat.",
      "id": "488b26fb-8ab0-4b45-9e69-d259c30e2ee6",
      "level": 2
    },
    {
      "question": "Nulla excepteur sunt excepteur adipisicing dolor exercitation eu laboris mollit voluptate proident est enim cupidatat.",
      "id": "350b3af2-96b8-498b-bd26-02bc56585731",
      "level": 5
    },
    {
      "question": "Reprehenderit voluptate cillum fugiat est officia ea nisi cupidatat id laborum mollit.",
      "id": "d5b1aeef-3529-4a79-a5ea-f3be69d2b18c",
      "level": 5
    },
    {
      "question": "Ex nisi ipsum nostrud elit est Lorem ullamco ad ut labore reprehenderit nisi do aute.",
      "id": "d3e32a08-97dc-4130-85bb-1f193f91900f",
      "level": 1
    },
    {
      "question": "Pariatur nulla exercitation velit voluptate culpa id et duis aliqua ullamco laborum minim Lorem.",
      "id": "377a52df-8a09-4558-b890-fcdc2a458b90",
      "level": 3
    },
    {
      "question": "Fugiat pariatur laboris commodo labore aute quis id laborum.",
      "id": "17398fd7-441e-46c0-81ca-47a0c76b8314",
      "level": 4
    },
    {
      "question": "Mollit consequat ex ex quis irure incididunt sit reprehenderit veniam velit pariatur consectetur reprehenderit sunt.",
      "id": "0df4fa7b-d998-4300-b958-44bd0ca9f4d2",
      "level": 2
    },
    {
      "question": "Sit commodo pariatur exercitation aute veniam commodo.",
      "id": "b1260f71-ebbe-49f7-8ea9-8edb73a1d337",
      "level": 1
    },
    {
      "question": "Sunt consectetur tempor magna occaecat proident laborum laborum.",
      "id": "27757fe7-e194-46eb-8fff-8c3bcc39c72b",
      "level": 2
    },
    {
      "question": "Irure velit qui et tempor laboris nostrud fugiat aute officia amet ex Lorem esse ad.",
      "id": "d3915bf6-e3ef-4b77-9c16-597dc5e0519c",
      "level": 5
    },
    {
      "question": "Sint cupidatat tempor reprehenderit ea dolore consectetur quis eu deserunt dolore Lorem voluptate nulla voluptate.",
      "id": "e5946db5-5388-4d70-b918-c3cc3e2ea054",
      "level": 4
    },
    {
      "question": "Sint aute quis Lorem ullamco elit deserunt occaecat aliquip culpa est minim exercitation nostrud.",
      "id": "539f509d-b1db-44f6-93f7-bca8eaf8c63c",
      "level": 2
    },
    {
      "question": "Commodo mollit sit id Lorem cupidatat exercitation ea.",
      "id": "9f937d00-b5dc-4b85-b4c8-7e4808cea652",
      "level": 5
    },
    {
      "question": "Aute eiusmod eiusmod proident amet mollit nostrud Lorem voluptate occaecat occaecat velit ea velit nisi.",
      "id": "6c747872-f964-49b2-a4f5-ea01686f632e",
      "level": 3
    },
    {
      "question": "Consequat velit enim reprehenderit occaecat ipsum proident.",
      "id": "4b0f19d7-92cd-4e11-9cbc-3f7551eda398",
      "level": 3
    },
    {
      "question": "Ipsum aute esse nostrud sit laboris minim tempor duis duis velit sint irure.",
      "id": "f02c3ab9-3d25-4567-bcee-ec0009ad6b02",
      "level": 2
    },
    {
      "question": "Non minim cupidatat consectetur deserunt.",
      "id": "847157e6-9daf-4938-8105-0fb6c0d9fc3b",
      "level": 4
    },
    {
      "question": "Ex cupidatat eiusmod elit do veniam aute fugiat sint pariatur.",
      "id": "0b5b83e2-4e44-4c8a-8ce7-ed80fb5da148",
      "level": 3
    },
    {
      "question": "Excepteur fugiat amet irure dolor eu aliquip id enim consectetur in anim elit tempor.",
      "id": "0a316129-e19f-464d-b748-c4a1d2e6970b",
      "level": 4
    },
    {
      "question": "Proident adipisicing consequat velit ea quis laboris adipisicing.",
      "id": "f108026c-61f9-4f34-adc7-972c20657dd5",
      "level": 3
    },
    {
      "question": "Consectetur anim ea nostrud exercitation.",
      "id": "18470cba-ec3a-4f46-b51a-f410dbeeae6d",
      "level": 2
    },
    {
      "question": "Officia dolore exercitation amet nulla Lorem.",
      "id": "136672ab-6544-4165-bc4b-9976234b0f75",
      "level": 4
    },
    {
      "question": "Commodo dolor Lorem nulla quis nulla proident adipisicing officia nostrud anim quis nisi duis et.",
      "id": "bfb051b1-b18c-4a36-b919-01831957c1d0",
      "level": 4
    },
    {
      "question": "Id enim eiusmod duis magna commodo sint esse.",
      "id": "7ffac1e0-6ac9-496f-880d-97e3f024c624",
      "level": 4
    },
    {
      "question": "Eiusmod cillum cupidatat non nostrud.",
      "id": "74e95489-ff8b-439c-94e7-1b09150e5093",
      "level": 1
    },
    {
      "question": "Do eu officia quis ex sit cupidatat enim commodo est eiusmod nisi deserunt laborum mollit.",
      "id": "996f88be-fd25-43b1-8ce6-2f11d4071aa4",
      "level": 1
    },
    {
      "question": "Duis voluptate adipisicing culpa labore.",
      "id": "f971d349-3497-453a-ba9e-cb32a524fb92",
      "level": 5
    },
    {
      "question": "Sint minim ad do cupidatat adipisicing.",
      "id": "dc89860d-3cad-4c9f-8f86-7af24e4b1938",
      "level": 5
    },
    {
      "question": "Nisi voluptate dolor occaecat sit velit magna ullamco.",
      "id": "7d0da61e-ef41-4090-92b7-c329eeb8a850",
      "level": 2
    },
    {
      "question": "Exercitation irure commodo ad reprehenderit.",
      "id": "9ba69e65-df71-46a0-8c87-33219402e34b",
      "level": 5
    },
    {
      "question": "Aliquip consectetur ad nisi non id id exercitation deserunt Lorem cupidatat aliqua minim.",
      "id": "a85a1845-cb4c-4660-bfa7-11ddf57229a3",
      "level": 1
    },
    {
      "question": "Ad anim amet nostrud in cupidatat incididunt Lorem aliqua voluptate exercitation dolore id do cillum.",
      "id": "bca051df-54de-4a26-8db9-65d91d51c09d",
      "level": 5
    },
    {
      "question": "Aliqua qui sint ut culpa voluptate exercitation veniam enim minim commodo enim exercitation.",
      "id": "12354112-ad34-4da8-929a-961381e9bb8b",
      "level": 5
    },
    {
      "question": "Ut ea elit irure ullamco sint.",
      "id": "eb8eb981-9065-45e4-8fe4-66ecb573e760",
      "level": 4
    },
    {
      "question": "Occaecat eu commodo reprehenderit minim cupidatat veniam.",
      "id": "bbebf181-ee14-4085-90c9-39911ff2887b",
      "level": 5
    },
    {
      "question": "Pariatur tempor aliquip reprehenderit aliquip eiusmod labore adipisicing proident dolore officia Lorem ad non.",
      "id": "ccf96c0f-cb77-40f4-8c0c-2cd3ad08035b",
      "level": 4
    },
    {
      "question": "Nostrud aute dolore ipsum amet quis excepteur incididunt et.",
      "id": "60f3b1c6-04ed-4ec9-a597-1f25242e5a1c",
      "level": 2
    },
    {
      "question": "Quis officia tempor consequat ipsum est.",
      "id": "d862e485-e1e4-444c-a155-0dc39d606622",
      "level": 5
    }
  ]
 }
  
}


