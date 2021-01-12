$(document).ready(function () {

  $(".darkmode").click(function () {
    $("html")
      .toggleClass("dark") 
      .css(
        $("html").hasClass("dark") 
          ? { filter: "invert(92%)" }
          : { filter: "invert(0%)" } 
      );
  });

  $('#links .button').click(function () {
    var selected = '#' + $(this).data('id');
    openSection(selected);
  });
  $('#schedule h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#schedule', selected);
  });
  $('#projects h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#projects', selected);
  });
  $('#exercises h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#exercises', selected);
  });
  $('#discussions h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#discussions', selected);
  });

  // $(function () {
  //   $("#syllabusLoad").load("html/syllabus.html");
  //   $("#scheduleLoad").load("html/schedule.html");
  //   $("#discussionsLoad").load("html/discussions.html");
  //   $("#exercisesLoad").load("html/exercises.html");
  //   $("#projectsLoad").load("html/projects.html");
  //   $("#studentworksLoad").load("html/studentworks.html");
  // });

  // $.get('date.json', function (data) {
  //   $('#updated_date').html(data.date);
  // });
});

function openSection(id, heading) {
  if (open && open === heading) closeSection(heading);
  else {
    $('.block').hide();
    if (heading) $('.toggle').hide();
    $(id).show();

    if (heading) {
      $('#' + heading + '-content').show();
      if ($(id + ' div.toggle:visible')[0]) {
        open = $(id + ' div.toggle:visible')[0].id.substring(0, 2);
      }
    }
    // window.location.hash = id.substring(1);
    // if (!heading) {
    //   $(window).scrollTop();
    // }
  }
}

function closeSection(heading) {
  $('.toggle').hide();
  open = null;
}
