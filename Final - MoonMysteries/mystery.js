      $(document).ready(function() {
alert("Welcome!");
alert("You've come to a fairy world!");
      $("#wugang").draggable();
      $("#rabbit").draggable();
      $("#change").draggable();
      $("#nichang").draggable();
      $("#mooncake").draggable();

      $("#goldmoon").click(function(){
      $("#china").show();
        });

      $("#goldmoon").hover(function(){
      $("#change").show();
        });

      $("#change").hover(function(){
      $("#wugang").show();
        });
      $("#wugang").hover(function(){
      $("#rabbit").show();
        });
      $("#rabbit").hover(function(){
      $("#nichang").show();
         });
      $("#nichang").hover(function(){
      $("#mooncake").show();
            });

      $("#change").click(function(){
      $("#story1").show();
      $("#shining").show();
      $("#sky").css("visibility", "hidden");
      $("#goldmoon").css("visibility", "hidden");
      $("#change").css("visibility", "hidden");
      $("#wugang").css("visibility", "hidden");
      $("#rabbit").css("visibility", "hidden");
      $("#nichang").css("visibility", "hidden");
      $("#mooncake").css("visibility", "hidden");
      $("#text").css("visibility", "hidden");
              });

      $("#story1").click(function(){
      $("#story2").show();
      $("#shining").show();
      $("#sky").css("visibility", "hidden");
      $("#goldmoon").css("visibility", "hidden");
      $("#change").css("visibility", "hidden");
      $("#wugang").css("visibility", "hidden");
      $("#rabbit").css("visibility", "hidden");
      $("#nichang").css("visibility", "hidden");
      $("#mooncake").css("visibility", "hidden");
      $("#text").css("visibility", "hidden");
            });

      $("#story2").click(function(){
        $(this).hide();
        $("#story1").hide();
        $("#shining").hide();
        $("#sky").css("visibility", "visible");
        $("#goldmoon").css("visibility", "visible");
        $("#change").css("visibility", "visible");
        $("#wugang").css("visibility", "visible");
        $("#rabbit").css("visibility", "visible");
        $("#nichang").css("visibility", "visible");
        $("#mooncake").css("visibility", "visible");
        $("#text").css("visibility", "visible");
            });

            $("#wugang").click(function(){
            $("#story3").show();
            $("#shining").show();
            $("#sky").css("visibility", "hidden");
            $("#goldmoon").css("visibility", "hidden");
            $("#change").css("visibility", "hidden");
            $("#wugang").css("visibility", "hidden");
            $("#rabbit").css("visibility", "hidden");
            $("#nichang").css("visibility", "hidden");
            $("#mooncake").css("visibility", "hidden");
            $("#text").css("visibility", "hidden");
                    });

            $("#story3").click(function(){
              $(this).hide();
              $("#shining").hide();
              $("#sky").css("visibility", "visible");
              $("#goldmoon").css("visibility", "visible");
              $("#change").css("visibility", "visible");
              $("#wugang").css("visibility", "visible");
              $("#rabbit").css("visibility", "visible");
              $("#nichang").css("visibility", "visible");
              $("#mooncake").css("visibility", "visible");
              $("#text").css("visibility", "visible");
                  });


                  $("#rabbit").click(function(){
                  $("#story4").show();
                  $("#shining").show();
                  $("#sky").css("visibility", "hidden");
                  $("#goldmoon").css("visibility", "hidden");
                  $("#change").css("visibility", "hidden");
                  $("#wugang").css("visibility", "hidden");
                  $("#rabbit").css("visibility", "hidden");
                  $("#nichang").css("visibility", "hidden");
                  $("#mooncake").css("visibility", "hidden");
                  $("#text").css("visibility", "hidden");
                          });

                  $("#story4").click(function(){
                    $(this).hide();
                    $("#shining").hide();
                    $("#sky").css("visibility", "visible");
                    $("#goldmoon").css("visibility", "visible");
                    $("#change").css("visibility", "visible");
                    $("#wugang").css("visibility", "visible");
                    $("#rabbit").css("visibility", "visible");
                    $("#nichang").css("visibility", "visible");
                    $("#mooncake").css("visibility", "visible");
                    $("#text").css("visibility", "visible");
                        });


                          $("#nichang").click(function(){
                          $("#story5").show();
                          $("#shining").show();
                          $("#sky").css("visibility", "hidden");
                          $("#goldmoon").css("visibility", "hidden");
                          $("#change").css("visibility", "hidden");
                          $("#wugang").css("visibility", "hidden");
                          $("#rabbit").css("visibility", "hidden");
                          $("#nichang").css("visibility", "hidden");
                          $("#mooncake").css("visibility", "hidden");
                          $("#text").css("visibility", "hidden");
                                                  });

                          $("#story5").click(function(){
                          $(this).hide();
                          $("#shining").hide();
                          $("#sky").css("visibility", "visible");
                          $("#goldmoon").css("visibility", "visible");
                          $("#change").css("visibility", "visible");
                          $("#wugang").css("visibility", "visible");
                          $("#rabbit").css("visibility", "visible");
                          $("#nichang").css("visibility", "visible");
                          $("#mooncake").css("visibility", "visible");
                          $("#text").css("visibility", "visible");
                                                });


                                                $("#mooncake").click(function(){
                                                $("#story6").show();
                                                $("#shining").show();
                                                $("#sky").css("visibility", "hidden");
                                                $("#goldmoon").css("visibility", "hidden");
                                                $("#change").css("visibility", "hidden");
                                                $("#wugang").css("visibility", "hidden");
                                                $("#rabbit").css("visibility", "hidden");
                                                $("#nichang").css("visibility", "hidden");
                                                $("#mooncake").css("visibility", "hidden");
                                                $("#text").css("visibility", "hidden");
                                                        });

                                                $("#story6").click(function(){
                                                $("#story7").show();
                                                $("#shining").show();
                                                $("#sky").css("visibility", "hidden");
                                                $("#goldmoon").css("visibility", "hidden");
                                                $("#change").css("visibility", "hidden");
                                                $("#wugang").css("visibility", "hidden");
                                                $("#rabbit").css("visibility", "hidden");
                                                $("#nichang").css("visibility", "hidden");
                                                $("#mooncake").css("visibility", "hidden");
                                                $("#text").css("visibility", "hidden");
                                                      });

                                                $("#story7").click(function(){
                                                  $(this).hide();
                                                  $("#shining").hide();
                                                  $("#story6").hide();
                                                  $("#sky").css("visibility", "visible");
                                                  $("#goldmoon").css("visibility", "visible");
                                                  $("#change").css("visibility", "visible");
                                                  $("#wugang").css("visibility", "visible");
                                                  $("#rabbit").css("visibility", "visible");
                                                  $("#nichang").css("visibility", "visible");
                                                  $("#mooncake").css("visibility", "visible");
                                                  $("#text").css("visibility", "visible");
                                                      });
})
