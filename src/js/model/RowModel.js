/**
 * @class RowModel
 * 
 * RowModel. Extends Model class
 * Appears as input with value
 * 
 * @param {string} value - Value passed to html input
 * @param {int} colIndex - Tile index
 */
function RowModel()
{
    // Super constructor
    Model.call(this, '<div class="crossword-row"></div>');
}
/**
 * RowModel extends Model
 */
RowModel.prototype = Object.create(Model.prototype, {
    keydown: {
        value: function(e){
            if(e.which == 38){
                if(this.previousSibling){
                    this.previousSibling.querySelector('.tile.input').focus();
                }
            }
            if(e.which == 40){
                if(this.nextSibling){
                    this.nextSibling.querySelector('.tile.input').focus();
                }
            }
        }
    }
});