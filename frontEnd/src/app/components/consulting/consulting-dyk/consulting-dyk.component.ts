import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulting-dyk',
  templateUrl: './consulting-dyk.component.html',
  styleUrls: ['./consulting-dyk.component.css']
})
export class ConsultingDykComponent implements OnInit {
  public first_four = ['this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this',
                       'this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this',
                        'this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this',
                        'this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this'];
  public first_four_icons = ['cloud_done','public','settings_input_composite','event_note'];

  public second_four = ['this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this',
    'this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this',
    'this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this',
    'this isan example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this is an example text this'];
  public second_four_icons = ['memory','device_hub','location_off','account_balance'];
  constructor() { }

  ngOnInit() {
  }
  boldText=function(searchKeywordsList, textParagraph){
    var final_textParagraph;
    for (var index=0; index<searchKeywordsList.length; index++){
      if (textParagraph.indexOf(searchKeywordsList[index]) > -1) {
        var regex = new RegExp('\\*(.+?)\\*', 'g');
        var replace = '<b>$1</b>';
        var searchedKeyword = searchKeywordsList[index].replace(searchKeywordsList[index], '*'+searchKeywordsList[index]+'*');
        /* console.log(searchedKeyword);*/
        var boldValue = searchedKeyword.replace(regex, replace);
        console.log(boldValue);
        final_textParagraph = textParagraph.replace(searchKeywordsList[index], boldValue);
      }
      else{
        final_textParagraph = textParagraph;
      }
    }
    return final_textParagraph;
  };

}
