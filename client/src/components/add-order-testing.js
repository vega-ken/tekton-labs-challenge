import React from 'react';

const AddOrderTesting = props => {
  //console.log(props.numberDishes);

  const DishesItems2 = leFunction(props.numberDishes);

  function leFunction(numberDishes) {
    for (let i = 0; i < numberDishes; i++) {
      console.log(numberDishes);
      return <div>testing</div>;
    }
  }

  const DishesItems = props.dishes.map(dish => {
    return (
      <div className="form-row">
        <div className="form-group col-8">
          <label htmlFor="dishName1">DishName Number #</label>
          <input
            type="text"
            className="form-control"
            id="dishName1"
            list="dishesAvailable"
            value={'' /*onChange={this.onSelectingDish}*/}
          />

          <datalist id="dishesAvailable">
            {/*{this.state.dishes
                ? this.state.dishes.map(dish => (
                    <option value={dish.dishName} key={dish._id} />
                  ))
                : null}*/}
          </datalist>
        </div>
        <div className="form-group col-4">
          <label htmlFor="dishPrice">Price</label>
          <input
            type="text"
            className="form-control"
            readOnly
            value={'' /*value={this.state.dishPrice}*/}
          />
        </div>
      </div>
    );
  });

  return <div>{DishesItems2}</div>;
};

export default AddOrderTesting;
