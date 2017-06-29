$(function(){
	    Bmob.initialize("2a0d923c9b559b83d468809cb22050ce", "41d3778ec04c6b30e7224f364d7bdd17");
		var Article = Bmob.Object.extend("Article");
		var query = new Bmob.Query(Article);
		// 查询所有数据
		query.find({
			success: function(results) {
				var str="";
				for (var i = 1; i < results.length; i++) {
					str += "<tr><td>"+i+"</td>"+"<td>"+results[i].get("title")+"</td></tr>";
				}
				$("#ahead").attr("hidden",false);
				$("#articleList").append(str);
			},
			error: function(error) {
				bootbox.alert("查询失败: " + error.code + " " + error.message);
			}
		});
});