/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer:
            What is the Big O notation : o(n^2)
            Explain your reason : การใช้ Bubble sort algorithm ตรงกับเงื่อนไขของ o(n^2) เนื่องจากต้องการสลับข้อมูลข้างในของ array ทั้งหมดและมีการเรียงลำดับจากน้อยไปมากโดยการกำหนด products[j].price > products[j + 1].price ซึ่งเหมาะสำหรับการใช้ในกรณีการเรียงลำดับข้อมูล

*/
