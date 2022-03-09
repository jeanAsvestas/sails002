module.exports = {


  friendlyName: 'View dashboard',


  description: 'Display "Dashboard" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/dashboard'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
