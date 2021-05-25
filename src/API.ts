
export const sendContinentAndGetQuestions = async(continentName: string) => {

  const endPoint = 'http://localhost:8000';
  const response = await fetch(endPoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8000',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"continent": continentName}),
  });

  // string converts to obj with .json()
  const data = await response.json();
  // console.log(data);
  return data;  
}