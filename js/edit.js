$(function(){
	Bmob.initialize("2a0d923c9b559b83d468809cb22050ce", "41d3778ec04c6b30e7224f364d7bdd17");
	$("#saveArticle").click(function(){
        var title = $("#title").val();
		var content = $("#content").val();
		var Article = Bmob.Object.extend("Article");
		var article = new Article();
		article.set("title",title);
		article.set("content",content);
		article.save(null, {
			success: function(article) {
			bootbox.alert("Congratulations！Success！:" + article.id);
			},
			error: function(article, error) {
			bootbox.alert("SomeThing went wrong！："+ error.description);
			}
		});
	});
});
