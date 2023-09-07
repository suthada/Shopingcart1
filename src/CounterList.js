import { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component{
    state = {
        itemlist:[
            {id: 1, value: 0, itemname:"iPhone" , price:150 }, 
            {id: 2, value: 0, itemname:"iPad", price:200 },
            {id: 3, value: 0, itemname:"iMac", price:300 },
            {id: 4, value: 0, itemname:"iBook", price:500 },
        ]
        
    };
    render () {
        return (
            <div>
                <div className="p-3 mb-2 bg-danger-subtle text-emphasis-danger">ราคารวม  {this.state.totalPrice}</div>

                <button 
                    onClick={this.resetButton}
                    className="btn btn-sm btn-danger d-inline">Reset</button>              
                {
                    this.state.itemlist.map((item) => {    
                        return (<Counter key={item.id} item={item} onIncrement={this.Increment} onReduce={this.reduce} />);            
                        }
                    )
                    
                }
            </div>    
        );
    }
    
    Increment = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        _itemList[indexItem].value++;
        this.setState({ itemlist : _itemList }, this.calculateTotalPrice);
    }
    reduce = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        _itemList[indexItem].value--;
        this.setState({ itemlist : _itemList }, this.calculateTotalPrice );
    }

    calculateTotalPrice() {
        const total = this.state.itemlist.reduce((acc, item) => {
            return acc + item.value * item.price;
        }, 0);
        this.setState({ totalPrice: total });
    }
    
    //function resetButton() {}
    resetButton = () => {
        var resetItem = this.state.itemlist.map((item) => { 
            item.value = 0; 
            return item;
        });
        this.setState({ resetItem, totalPrice: 0 });
    }
}
export default CounterList;
