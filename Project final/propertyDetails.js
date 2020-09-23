document.getElementById('propertyDetails').onsubmit = function(e)
{
    var newRow,i;
    e = e || window.event;
    if (e.preventDefault)
    {
        e.preventDefault();
        e.stopPropagation();
    }
    e.returnValue = false;
    e.cancelBubble = true;
    newRow = '<tr>';
    for(i=0;i<this.elements.length;i++)
    {
        if (this.elements[i].tagName.toLowerCase() === 'input' && this.elements[i].type === 'text')
        {
            newRow += '<td>'+this.elements[i].value+'</td>';
        }
    }
    document.getElementById('targetTbl').innerHTML += newRow + '</tr>';
    return false;
};