function getQuantities(orderId = 0, arrayOfProductIds = []) {
    var orderProducts2 = { orderId: orderId, productIds: arrayOfProductIds };
    var mySocket = io.sails.connect();
    mySocket.on('connect', function onConnect() {
        console.log("Socket connected!");
        // let data = JSON.stringify(orderProducts2);
        if (orderId !=0 && arrayOfProductIds > 0) {
            mySocket.request(
                {
                    method: 'post',
                    url: '/orders/quantities',
                    data: { orderId: orderProducts2.orderId, productIds: orderProducts2.productIds }
                },
                function (result, response) {
                    for (let i = 0; i < result.length; i++) {
                        let id = `o${orderProducts2.orderId}p${orderProducts2.productIds[i]}`;
                        let entry = document.getElementById(id);
                        entry.innerHTML = result[i];
                    }
                }
            );

        }
    });
}
window.onload = getQuantities;
