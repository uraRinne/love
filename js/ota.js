function y_ipad(){
 var ua = navigator.userAgent.toLowerCase();
 if(ua.match(/iPad/i)=="ipad" || ua.match(/iphone/i)=="iphone" || ua.match(/android/i)=="android")
 {
  //移动端处理
 }
}
function hidebox()
{
$('.txtbox').hide(500);
}
function posttxt()
{
if($('#text').val()=="")
{
	return;
}
else
{
	$.post("http://happybirthday-liulu.ml/js/post.php", { name: $('#name').val(), emails: $('#emails').val(),text:$('#text').val() },
	function(data)
	{
		$('#text').val('');
		getlist(1);
	});
}
}
function getlist(num){
$.post("http://happybirthday-liulu.ml/js/get.php",{page:num}, function(data) {
  $(".txtlist").html('<li class="pdtitle"></li>'+data);
  $imgs = $('.oimg');
  $emailcc=$('.email');
  for(var i_i=0;i_i<$imgs.length;i_i++)
  {
    $emailcc[i_i].id="email_"+i_i;
	$imgs[i_i].src='https://www.gravatar.com/avatar/'+hex_md5($('#email_'+i_i).attr('yv'))+'?s=128&d=&r=G';
  }
  $(".pdtitle").html("Message Board <b>world line:"+$("#ctime").html()+"</b><div class='x' onclick='hidebox()'>x</div>");
});
 $('.txtbox').show(500);
}

var text="人啊，幸福吧！不沉溺在幸福之中……也不对世界感到绝望……";
var delay=50;
var i=0;
function scrollit(){
txt.innerText=text.slice(0,i++);
if(i>text.length){
    i=0;
	$('#fos').fadeIn(4000);
    return;
}
else setTimeout("scrollit()",delay);
}
