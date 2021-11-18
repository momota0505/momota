　　'use strict';

    // トグルナビの開閉

    $(document).ready(function(){
        $('.btn-burger').on('click',function(){
            $('.top-container .menu').toggleClass('btn-open');
        });
    });

    // ヘッダのゆらゆらボタン

    const scrollAbout = function () {
        const AboutLeft = document.getElementById("scroll_about").getBoundingClientRect().left;
        const AboutTop = document.getElementById("scroll_about").getBoundingClientRect().top;
        window.scrollTo({
            left: AboutLeft,
            top: AboutTop,
            behavior: 'smooth'
        });
    };


　　　//　ページ２のモーダル開閉
 　　　
    // $(document).ready(function(){
    //     $('.contents-table').on('click',function(){
    //         $('.modal-window').removeClass('mw-1')
    //     });
    // });

    $(document).ready(function(){
        $('.modalclose').on('click',function(){
            $('.modal-window').addClass('mw-1')
        });
    });

    
    // youtubeのAPI、jsonファイルのajax

    $.ajax({
        type:'get',
        url:'https://www.googleapis.com/youtube/v3/activities',
        dataType:'json',
        data:{
           key:'AIzaSyCC0J-bffThGwEoffJx48-cL4_ejBG311w',
           part:'snippet',
           id:'videoId',
           channelId:'UCnejnpUWcpDBLpYx7dxXVsQ',
           maxResults:'9',
        }
    })

    .done(function(data){
        console.log(data);

        let currentNum = 0;

        while(currentNum <= 8 ){

            const idName = `#modal-${currentNum}`;

            const snippet = data.items[currentNum].snippet ;
            const thumbPath = snippet.thumbnails.standard.url ;

            const videoURL = `https://www.youtube.com/embed/${data.items[currentNum].id}`;  

            console.log(thumbPath);

            $(idName).find('img').attr('src',thumbPath);
            $(idName).find('h4').text(snippet.title);

            $(idName).on('click',function(){
                $('.modal-window h4').text(snippet.title);
                $('.modal-window p').text(snippet.description);
                $('.modal-window').find('img').attr('src',thumbPath);
                $('.modal-window').removeClass('mw-1');
            })
            
            currentNum += 1;
        }

        // $('.contents-table').each(function(){
        //     const snippet = data.items[currentNum].snippet ;
        //     const thumbPath = snippet.thumbnails.standard.url ;

        //     $('.contents-table').find('img').attr('src',thumbPath);

        //     currentNum ++ ;
        // })
        
    })

    .fail(function(){   
        console.log('ajax.failed!')
    });
                

               
    // googleMAPのAPI

    

    function initMap(){
        let map = new google.maps.Map(document.getElementById('map'),{
            center:{lat:35.839,lng:139.664},
            zoom:8
        });
    }


   
    