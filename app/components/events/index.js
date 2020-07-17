import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action  } from '@ember/object';

export default class EventsComponents extends Component{

	/** variable for data*/

	//meeting variable for all meeting related details like meeting links
	meeting = {
		link: 'https://www.airmeet.com/e/57d5b2b0-c7a7-11ea-a4ea-fd3d36d2c7f6'
	};

	//event variable for all details for the upcoming event
	event = {
		title: "How to build for Web using EmberJS",
		date: "Sunday, 19th July, at 4pm IST"
	};

	//speakerData variable for  all details of speakers in the format of array of objects
	speakerData = [{
		name: 'Akanksha Dharkar',
		info: 'Software Development Engineer at LinkedIn',
		links: {
			linkedin: 'https://www.linkedin.com/in/akankshadharkar/'
		},
		topic: {
			name: 'Basic of EmberJS',
			details: [
				'What is EmberJS',
				'Component',
				'Helper Functions',
				'et cetera'
			]
		}
	}];
	
}