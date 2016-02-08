/*jshint node:true*/

var DataModel = {
	resume: {
		sections: [
			{key: 'profile', name: 'Profile', icon: 'mdi-social-person'},
			{key: 'work', name: 'Work Experience', icon: 'mdi-action-work'},
			{key: 'certifications', name: 'Certifications', icon: 'mdi-social-whatshot'},
			{key: 'courses', name: 'Courses', icon: 'mdi-maps-local-library'},
			{key: 'education', name: 'Education', icon: 'mdi-social-school'},
			{key: 'professionalskills', name: 'Professional Skills', icon: 'mdi-action-trending-up'},
			{key: 'personalskills', name: 'Personal Skills', icon: 'mdi-av-equalizer'},
			{key: 'interests', name: 'Interests', icon: 'mdi-action-favorite'},
			{key: 'contact', name: 'Contact', icon: 'mdi-communication-email'},
			{key: 'up', name: 'Up', icon: 'mdi-hardware-keyboard-arrow-up', includeInMenu: false}
		],
		header: {
			name: 'Ionut Costica',
			occupation: 'Full Stack Web Developer',
			image: '/resume/img/profile.jpg',
			statement: [
				'<b>Hello, I\'m Ionut!</b> I\'m a Full Stack Web Developer &amp; Web Application Developer.',
				'I\'m <em>passionate</em> about making great web sites &amp; applications, both client and server-side.',
				'I love creating programs with <em>engaging interfaces</em> and a <em>streamlined user experience</em>.',
				'I like code that is <em>performant</em>, <em>elegant</em> and easily <em>maintainable</em>.',
				'I\'m very interested in the Web in general and JavaScript in particular.',
				'I enjoy learning and experimenting with new technologies.'
				]
		},
		profile: {
			fullname: 'Ionut Costica',
			birthdate: '20 May 1986',
			birthplace: 'Timisoara, Romania',
			social: [
				{ site: 'linkedin', title: 'LinkedIn Profile',
					url: 'https://www.linkedin.com/in/ionutcostica', icon: 'zmdi zmdi-linkedin-box' },
				{ site: 'github', title: 'GitHub Projects &amp; Contributions',
					url: 'https://github.com/souldreamer', icon: 'zmdi zmdi-github' },
				{ site: 'codepen', title: 'Codepen Playground',
					url: 'http://codepen.io/souldreamer', icon: 'zmdi zmdi-codepen' },
				{ site: 'stackoverflow', title: 'StackOverflow Q&amp;A',
					url: 'https://stackoverflow.com/users/1252155/ionut-costica', icon: 'zmdi zmdi-stackoverflow' }
			]
		},
		work: [
			{
				period: 'January 2012 - Current',
				length: '4 years, 1 month',
				details: [
					'<strong>SC AEM SA</strong>',
					'<strong>Web Application Developer</strong>'
				],
				description: [
					'Developing Intranet Web Applications for AMR (Automated Meter Reading), meter configuration and report generation.'
				],
				technologies: [
					{type: 'Back-end', which: 'C#, ASP.NET, DevExpress, Microsoft SQL Server, MongoDB'},
					{type: 'Front-end', which: 'HTML5, CSS3, JavaScript, JQuery'},
					{which: 'Additionally, worked on improving the user interface and user experience of the application, and convinced the management to let me implement a caching system using MongoDB as a storage layer, which greatly improved overall performance and user experience.'}
				]
			},
			{
				period: 'September 2011 - January 2012',
				length: '4 months',
				details: [
					'<strong>West University of Timisoara Students\' Union</strong>',
					'<strong>Web Developer</strong>'
				],
				description: [
					'Website optimization, database administration &amp; optimization',
					'Wordpress plug-in development'
				],
				technologies: [
					{type: 'Back-end', which: 'PHP, MySQL'},
					{type: 'Front-end', which: 'HTML, CSS, JavaScript, Mootools'}
				]
			},
			{
				period: 'May 2011 - July 2011',
				length: '3 months',
				details: [
					'<strong>Yale University</strong>, professor Richard Yang',
					'<strong>Undergraduate Researcher</strong>'
				],
				description: [
					'Android application development using Adobe Flash &amp; Adobe Flex.'
				],
				technologies: [
					{type: 'Applications', which: 'Adobe Flash, Adobe Flex'}
				]
			},
			{
				period: 'March 2008 - May 2009',
				length: '1 year, 3 months',
				details: [
					'<strong>Maya</strong> (student group at <em>Yale University</em>)',
					'<strong>Web Designer &amp; Web Developer</strong> (part-time)'
				],
				description: [
					'Web Design &amp; Web Development for various other on-campus student groups.'
				]
			},
			{
				period: 'July 2008 - September 2008',
				length: '3 months',
				details: [
					'<strong>Yale University</strong>, professor Holly Rushmeier',
					'<strong>Undergraduate Researcher</strong> in Computer Vision &amp; Computer Graphics'
				]
			},
			{
				period: 'March 2005 - August 2006',
				length: '1 year, 6 months',
				details: [
					'<strong>Freelance</strong>',
					'<strong>Web Developer</strong>'
				],
				description: [
					'Various Web Development and Web Design projects.'
				]
			},
			{
				period: 'October 2004 - February 2005',
				length: '5 months',
				details: [
					'<strong>Wolfgang Engel</strong>',
					'<strong>3D Graphics Programmer</strong>'
				],
				description: [
					'3D Graphics programming (HLSL/GPU assembler), especially procedural algorithms for texture and object generation in real-time, working with the editor of the "ShaderX" book series.'
				]
			}
		],
		certifications: [
			{
				date: 'April 2015',
				name: '<strong>MongoDB Certified Developer</strong> Associate Level',
				issuer: 'The MongoDB Certification Program',
				description: '<a href="https://university.mongodb.com/exams/display_certificate?license1=985&license2=645&license3=855" class="btn btn-material-green hidden-print">Verify</a><a href="https://university.mongodb.com/exams/display_certificate?license1=985&license2=645&license3=855" class="hidden-screen">Verify at https://university.mongodb.com/exams/display_certificate?license1=985&license2=645&license3=855</a><br/>(<em>License #</em>: 985-645-855)'
			},
			{
				date: '1999',
				name: '<strong>Certified C/C++ Programmer</strong>',
				issuer: 'International Computer School',
				description: 'Certified by the <em>Romanian Ministry of Education</em>'
			}
		],
		courses: [
			{
				period: 'December 2015 - current',
				course: 'Senior Web Developer Nanodegree',
				institution: 'Udacity',
				url: 'https://www.udacity.com/course/senior-web-developer--nd802',
				description: 'Taking course to build my code portfolio and continue learning new technologies'
			},
			{
				period: 'March 2015 - May 2015',
				course: 'M101JS: MongoDB for Node.js Developers',
				institution: 'MongoDB University',
				url: 'http://university.mongodb.com/',
				description: 'Finished course with a score of 100% placing me in the top 6% of the approximately 5000 students taking it.'
			},
			{
				course: 'Advanced Rendering',
				institution: 'viCampus',
				description: 'Taught by <em>Wolfgang Engel</em>, editor of the <em>ShaderX</em> book series'
			},
			{
				course: 'Introduction to 3D Programming',
				institution: 'viCampus'
			}
		],
		education: [
			{
				period: 'September 2007 - June 2011',
				degree: 'Bachelors Degree - Computer Science (candidate)',
				school: 'Yale University',
				location: 'New Haven, Connecticut, USA'
			},
			{
				period: 'September 2005 - June 2007, September 2014 - September 2015',
				degree: 'Bachelors Degree - B.Sc. Computer Science in English',
				school: 'West University of Timisoara',
				location: 'Timisoara, Romania'
			}
		],
		professionalskills: [
			{
				category: 'Web Development (Front-end)',
				proficiency: 90,
				skills: [
					{ proficiency: 90, skill: 'HTML5' },
					{ proficiency: 90, skill: 'CSS3' },
					{ proficiency: 70, skill: 'LESS/SASS' },
					{ proficiency: 95, skill: 'JavaScript' },
					{ proficiency: 60, skill: 'JavaScript (ES6)' },
					{ proficiency: 50, skill: 'TypeScript' },
					{ proficiency: 80, skill: 'jQuery' },
					{ proficiency: 70, skill: 'Mootools' },
					{ proficiency: 40, skill: 'Angular.js' },
					{ proficiency: 50, skill: 'Angular2' }
				]
			},
			{
				category: 'Web Development (Back-end)',
				proficiency: 90,
				skills: [
					{ proficiency: 90, skill: 'ASP.NET &amp; C#' },
					{ proficiency: 70, skill: 'node.js' },
					{ proficiency: 60, skill: 'PHP' }
				]
			},
			{
				category: 'Database Programming',
				proficiency: 85,
				skills: [
					{ proficiency: 90, skill: 'Microsoft SQL Server' },
					{ proficiency: 85, skill: 'MongoDB' },
					{ proficiency: 70, skill: 'MySQL' }
				]
			},
			{
				category: 'General Programming',
				proficiency: 85,
				skills: [
					{ proficiency: 90, skill: 'C#' },
					{ proficiency: 75, skill: 'C++' },
					{ proficiency: 60, skill: 'Python' },
					{ proficiency: 40, skill: 'Java' },
					{ proficiency: 85, skill: 'Algorithms' }
				]
			},
			{
				category: '3D Programming',
				proficiency: 70,
				skills: [
					{ proficiency: 85, skill: 'Graphics Algorithms' },
					{ proficiency: 80, skill: 'HLSL, GLSL, GPU Assembler' },
					{ proficiency: 70, skill: 'OpenGL' },
					{ proficiency: 70, skill: 'DirectX' },
					{ proficiency: 50, skill: 'Maya plug-in development (MEL script/C++)' },
					{ proficiency: 50, skill: 'Blender plug-in development (Python)' }
				]
			},
			{
				category: 'Graphic/Web Design',
				proficiency: 60,
				skills: [
					{ proficiency: 85, skill: 'Adobe Photoshop' },
					{ proficiency: 50, skill: 'Adobe Illustrator' },
					{ proficiency: 80, skill: 'Adobe Flash' },
					{ proficiency: 80, skill: 'UI/UX' }
				]
			}
		],
		personalskills: [
			{ proficiency: 110, skill: 'Passion' },
			{ proficiency: 100, skill: 'Creativity' },
			{ proficiency: 90, skill: 'Learning' },
			{ proficiency: 90, skill: 'Teamwork' },
			{ proficiency: 70, skill: 'Leadership' },
			{ proficiency: 99, skill: 'Black Magic (Coding =)' }
		],
/*		interests: [
			{
				interest: '',
				description: ''
			}
		],
*/		contact: {
			address: ['7A Aleea Hotinului', 'Timisoara 300668, Timis, Romania'],
			phone: '+40 735 655 650',
			email: 'ionut.costica@gmail.com'
		}
	}
};

module.exports = DataModel;
