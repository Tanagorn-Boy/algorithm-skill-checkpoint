/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: 
        What is the Big O notation : o(n)  
        Explain your reason : เพราะเป็นการหาเพื่อตรวจสอบค่าทั้งหมดใน students(Array) จนกว่าจะเจอค่าที่ตรงเงื่อนไข หรือกรณีแย่ที่สุดหากระทั่งครบทุกตัวจึงเป็นการทำงานของ  o(n) ซึ่งจะตรงกับการใช้ Linear search algorithm สำหรับข้อมูลที่ไม่มีการเรียงลำดับ


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: 
        What is the Big O notation : o(log n) 
        Explain your reason : เป็นการหาค่าแบบแบ่งครึ่งในแต่ละการค้นหาของแต่ละรอบจนกว่าจะเจอค่าที่ต้องการ หรือกรณีแย่ที่สุดหากระทั่งครบทุกตัวจึงเป็นการทำงานของ o(log n)  ซึ่งจะตรงกับการใข้งาน Binary search algorithm สำหรับข้อมูลที่มีการเรียงลำดับแล้ว

*/

/* 
Which function is more efficient and why?
Answer: ถ้าในกรณีที่มีจำนวนข้อมูลที่มีมหาศาลการใช้ o(log n) :  Binary search algorithm จะดีกว่าเนื่องจากจะทำงานได้ไวมากกว่าในการค้นหาข้อมูลในแบบของ o(n) : Linear search algorithm เพราะ เป็นการหาค่าเพื่อตรวจสอบข้อมูลทั้งหมดตั้งแต่เริ่มต้นเรียงไปจนกว่าทั้งพบเงื่อนไขหรือค่าที่ต้องการ ซึ่งหากข้อมูลมีจำนวนมากและค่าของผลลัพธ์อยู่ลำดับสุดท้ายอาจทำให้การค้นหาเสียเวลามากกว่าการใช้ในรูปแบบของ  o(log n) :  Binary search algorithm


*/
