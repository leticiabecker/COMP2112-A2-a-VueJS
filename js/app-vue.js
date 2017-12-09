var app = new Vue({
  el: "#app",
  beforeMount: function () {
    this.initialize();
  },
  mounted: function () {
    this.gen = this.addEmails();
  },
  data: {
    emails: [{
        id: 'a',
        name: "Damian Selwin",
        avatar: "https://placeimg.com/100/100/people",
        subject: "Fundamental non-volatile matrices",
        body: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        time: "11:13 AM",
        date: "2017-02-01",
        deleted: false
      },
      {
        id: 'b',
        name: "Alexandros Romeuf",
        avatar: "https://placeimg.com/101/101/people",
        subject: "Customer-focused holistic pricing structure",
        body: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        time: "11:50 AM",
        date: "2017-08-06",
        deleted: false
      },
      {
        id: 'c',
        name: "Blanch MacCurlye",
        avatar: "https://placeimg.com/102/102/people",
        subject: "Proactive coherent task-force",
        body: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        time: "2:36 AM",
        date: "2017-08-04",
        deleted: false
      },
      {
        id: 'd',
        name: "Noland Tulloch",
        avatar: "https://placeimg.com/103/103/people",
        subject: "Centralized discrete time-frame",
        body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        time: "8:45 AM",
        date: "2017-09-13",
        deleted: false
      },
      {
        id: 'e',
        name: "Elane De la Feld",
        avatar: "https://placeimg.com/104/104/people",
        subject: "Optimized contextually-based solution",
        body: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        time: "9:54 AM",
        date: "2017-11-10",
        deleted: false
      },
      {
        id: 'f',
        name: "Tremayne Stonhard",
        avatar: "https://placeimg.com/105/105/people",
        subject: "Assimilated static contingency",
        body: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        time: "6:30 PM",
        date: "2017-11-15",
        deleted: false
      }
    ],
    newEmails: [{
        id: 'g',
        name: "Damian Selwin",
        avatar: "https://placeimg.com/100/100/people",
        subject: "Fundamental non-volatile matrices",
        body: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        time: "11:13 AM",
        date: "2017-02-01",
        deleted: false

      },
      {
        id: 'h',
        name: "Alexandros Romeuf",
        avatar: "https://placeimg.com/101/101/people",
        subject: "Customer-focused holistic pricing structure",
        body: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        time: "11:50 AM",
        date: "2017-08-06",
        deleted: false

      },
      {
        id: 'i',
        name: "Blanch MacCurlye",
        avatar: "https://placeimg.com/102/102/people",
        subject: "Proactive coherent task-force",
        body: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        time: "2:36 AM",
        date: "2017-08-04",
        deleted: false
      },
      {
        id: 'j',
        name: "Noland Tulloch",
        avatar: "https://placeimg.com/103/103/people",
        subject: "Centralized discrete time-frame",
        body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        time: "8:45 AM",
        date: "2017-09-13",
        deleted: false
      },
      {
        id: 'l',
        name: "Elane De la Feld",
        avatar: "https://placeimg.com/104/104/people",
        subject: "Optimized contextually-based solution",
        body: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        time: "9:54 AM",
        date: "2017-11-10",
        deleted: false
      },
      {
        id: 'k',
        name: "Tremayne Stonhard",
        avatar: "https://placeimg.com/105/105/people",
        subject: "Assimilated static contingency",
        body: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        time: "6:30 PM",
        date: "2017-11-15",
        deleted: false
      }
    ],
    selectedEmail: 0,
    currentFolder: 'inbox',
    filteredEmails: [],
    gen: ''
  },
  methods: {
    initialize: function () {

      // Check if 'emails' exists on localStorage
      if (localStorage.getItem('emails')) {

        // If true, use the emails from localStorage
        this.emails = JSON.parse(localStorage.getItem('emails'));

        // Filter them accordingly to the current folder
        this.filterFolder();

      } else {
        // Use the global emails and Filter accordingly to the current folder
        this.filterFolder();
      }
    },

    // Filter accordingly to the current folder
    filterFolder: function () {

      // If Inbox
      if (this.currentFolder === 'inbox') {

        // Check if there are still emails in the inbox and filter them
        if (this.emails.filter(email => email.deleted === false).length > 0) {
          // Update filteredEmails array
          this.filteredEmails = this.emails.filter(email => email.deleted === false);

        } else {

          // If there is no more emails in the inbox
          console.warn('no emails on inbox');

          // Update filteredEmails array
          this.filteredEmails = this.emails.filter(email => email.deleted === false);

          // Display something on the screen


        }

        // If Trash
      } else if (this.currentFolder === 'trash') {

        // Check if there are still emails in the trash and filter them
        if (this.emails.filter(email => email.deleted === true).length > 0) {
          // Update filteredEmails array
          this.filteredEmails = this.emails.filter(email => email.deleted === true);
          // selectEmail();

        } else {

          // If there is no more emails in the trash
          console.warn('no emails on trash');

          // Update filteredEmails array
          this.filteredEmails = this.emails.filter(email => email.deleted === true);

          // Display something on the screen



        }
      }
    },

    selectEmail: function (email, index) {

      // When an email on the list is clicked, check if it is not selected
      if (!this.selected()) {
        // Update selectedEmail using its index - it will update the main automatically
        this.selectedEmail = index;
      }
    },

    selected: function (index) {
      return index === this.selectedEmail;
    },

    addEmails: function* () {
      let indexEmails = 0;

      while (indexEmails < this.newEmails.length)
        yield this.newEmails[indexEmails++];
    },

    btn_addEmails: function () {
      let tempObj = this.gen.next() || {};

      // so as to prevent pushing an empty object
      tempObj.done ?
        console.warn("no more emails") :
        this.emails.push(tempObj.value);

      this.currentFolder === 'inbox';
      this.filterFolder();
    },

    deleteEmail: function (id) {
      // Get the email's index on the main Array using its id
      let emailIndex = this.emails.findIndex(e => e.id === id);

      // Check if the email already has the deleted property = true. 
      if (!this.emails[emailIndex].deleted) {
        // If not, set deleted = true
        this.$set(this.emails[emailIndex], "deleted", true);

        // Update local storage
        this.setLocalStorage();

        // Update view of inbox
        this.displayInbox();
        this.selectedEmail = 0;

      } else {
        // If the current game has the key/value deleted:true, set it to false (Recover from Trash)
        this.emails[emailIndex].deleted = false;

        // Update local storage
        this.setLocalStorage();

        // Update view
        this.displayTrash();
        this.selectedEmail = 0;
      }
    },

    displayTrash: function () {
      this.currentFolder = 'trash';
      this.selectedEmail = 0;
      this.filterFolder();
    },

    displayInbox: function () {
      this.currentFolder = 'inbox';
      this.selectedEmail = 0;
      this.filterFolder();
    },

    setLocalStorage: function () {
      // update state of emails array on localStorage
      localStorage.setItem('emails', JSON.stringify(this.emails));
    },

    isEmpty: function () {
      return this.filteredEmails.length === 0;
    }
  }
});