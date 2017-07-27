var View = {
    render: function(templateName, model){
        templateName = templateName + 'Template';
        
        var templateElement = document.getElementById(templateName);
        templateSourse = templateElement.innerHTML;
        rendernFn = Handlebars.compile(templateSourse);
        
        return rendernFn(model);
    }
}