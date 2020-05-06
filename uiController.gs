function showAlert() {

  var result = ui.alert(
     'Please confirm',
     'Are you sure you want to continue?',
      ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (result == ui.Button.YES) {
    // User clicked "Yes".
    //ui.alert('Confirmation received.');
    main();
  } else {
    // User clicked "No" or X in the title bar.
    ui.alert('Permission denied.');
  }
}