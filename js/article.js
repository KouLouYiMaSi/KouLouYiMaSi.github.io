$(function(){
	    Bmob.initialize("2a0d923c9b559b83d468809cb22050ce", "41d3778ec04c6b30e7224f364d7bdd17");
		var Article = Bmob.Object.extend("Article");
		var query = new Bmob.Query(Article);
		query.find({
			success: function(results) {
				var str="";
				for (var i = 1; i < results.length; i++) {
					str += "<tr><td>"+i+"</td>"+"<td>"+results[i].get("title")+"</td>"
					+"<td>"+new Date(results[i].get("updatedAt")).Format("yyyy-MM-dd HH:mm:ss")+"</td>"
					"</tr>";
				}
				$("#ahead").attr("hidden",false);
				$("#articleList").append(str);
			},
			error: function(error) {
				bootbox.alert("出现错误: " + error.code + " " + error.message);
			}
		});
});
Date.prototype.Format = function (fmt) { //author: meizz   
    var o = {  
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };  
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    for (var k in o)  
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
    return fmt;  
}  
