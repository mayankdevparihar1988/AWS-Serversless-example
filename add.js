'use strict';

module.exports.add = async (event,context) => {

    let {num1,num2} = JSON.parse(event.body);
    console.log("num1 : "+ num1 + "num2 :"+num2);

    const output= {
        message: 'add executed successfully!',
        num1: num1,
        num2: num2,
        body: num1+num2,
      };

      console.log('Output ---> ', JSON.stringify(output,null,2));

  return {
    statusCode: 200,
    body: JSON.stringify(
      output,
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
