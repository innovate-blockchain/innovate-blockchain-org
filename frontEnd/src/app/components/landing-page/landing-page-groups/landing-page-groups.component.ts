import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-groups',
  templateUrl: './landing-page-groups.component.html',
  styleUrls: ['./landing-page-groups.component.css']
})
export class LandingPageGroupsComponent implements OnInit {
  public image_base = 'assets/images/';
  public style_obj = {
    width: '108px',
    height: '50px'
  };
  public tm_img = this.image_base + 'bis_bis-mark-19.png';
  public meta_data = {
    education: {
      text: 'Education: this is an example text this is an example text this is an example text this is \n' +
        'an example text this is an example text this is an example text this is an \n' +
      'example text this is an example text this is an example text this is an \n' +
      'example text this is an example textthis is an example textthis is an \n' +
      'example textthis is an example textthis is an example textthis is an example \n' +
      'textthis is an example textthis is an example textthis is an example textthis \n' +
      'is an example text',
      color: '#2F0D9D',
      image_url: this.image_base + 'bis_education-full.png',
      video_url: 'https://www.youtube.com/embed/s1LozefwTfo'
    },
    investment: {
      text: 'Investment: this is an example text this is an example text this is an example text this is \n' +
        'an example text this is an example text this is an example text this is an \n' +
      'example text this is an example text this is an example text this is an \n' +
      'example text this is an example textthis is an example textthis is an \n' +
      'example textthis is an example textthis is an example textthis is an example \n' +
      'textthis is an example textthis is an example textthis is an example textthis \n' +
      'is an example text',
      color: '#FFAC40',
      image_url: this.image_base + 'bis_investment-full.png',
      video_url: 'https://www.youtube.com/embed/s1LozefwTfo'
    },
    research: {
      text: 'R& D: this is an example text this is an example text this is an example text this is \n' +
        'an example text this is an example text this is an example text this is an \n' +
      'example text this is an example text this is an example text this is an \n' +
      'example text this is an example textthis is an example textthis is an \n' +
      'example textthis is an example textthis is an example textthis is an example \n' +
      'textthis is an example textthis is an example textthis is an example textthis \n' +
      'is an example text',
      color: '#EA2A40',
      image_url: this.image_base + 'bis_randd-full.png',
      video_url: 'https://www.youtube.com/embed/s1LozefwTfo'
    },
    consulting: {
      text: 'Consulting: this is an example text this is an example text this is an example text this is \n' +
        'an example text this is an example text this is an example text this is an \n' +
      'example text this is an example text this is an example text this is an \n' +
      'example text this is an example textthis is an example textthis is an \n' +
      'example textthis is an example textthis is an example textthis is an example \n' +
      'textthis is an example textthis is an example textthis is an example textthis \n' +
      'is an example text',
      color: '#4CBD5E',
      image_url: this.image_base + 'bis_consulting-full.png',
      video_url: 'https://www.youtube.com/embed/s1LozefwTfo'
    }
  };
  public four_pillar_text = this.meta_data['education'].text;
  public selected_pillar = 'education';
  public video_url = this.meta_data['education'].video_url;

  public title_style = {
    fontSize: '30px',
    fontFamily: 'Bold',
    paddingLeft: '5%',
    color: this.meta_data[this.selected_pillar].color
  };
  private _id = '';
  constructor() { }
  ngOnInit() {
  }
  iconClicked(event) {
    this._id = event.srcElement.id;
    this.four_pillar_text = this.meta_data[this._id].text;
    this.selected_pillar = event.srcElement.id;
    this.title_style.color = this.meta_data[this._id].color;
    this.video_url = this.meta_data[this._id].video_url;
    console.log(event.srcElement.id);
  }
}
