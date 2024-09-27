function App(){
  let productsList = [
    {name : "product 1", price : 999}, 
    {name : "product 2", price : 299},
    {name : "product 3", price : 799},
    {name : "product 4", price : 899}
  ];
  return(
    <>
      <div>
        <table style={{border : "2px solid black", borderCollapse : "collapse"}}>
          <thead>
            <th style={{border : "2px solid black"}}>S.No.</th>
            <th style={{border : "2px solid black"}}>Product Name</th>
            <th style={{border : "2px solid black"}}>Product Price</th>
          </thead>
          <tbody>
            {productsList.map((item, index) => {
              return(
                <tr key = {index}>
                  <td style={{border : "2px solid black", borderCollapse : "collapse"}}>{index + 1}</td>
                  <td style={{border : "2px solid black", borderCollapse : "collapse"}}>{item.name}</td>
                  <td style={{border : "2px solid black", borderCollapse : "collapse"}}>{item.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default App

// react improves rendering
// virtual dom doesn't get refreshed on every small change
// never create open variables in react(const, let, var)
// always use useState/useRef
// tomorrow class -> useCallback, useMemo