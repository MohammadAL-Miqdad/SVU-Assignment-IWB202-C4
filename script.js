$(document).ready(function () {
    $(".details").change(function () {
        $(this).closest("tr").next(".car-details").toggle(this.checked);
    });
});

    document.addEventListener('change', e=>{
    document.getElementById('btn1').disabled= !document.querySelector('.check:checked');
    });


function showAndScroll() {
    
          const form = document.getElementById("div1");
          form.style.display="block";

           form.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'      
            });
        }
         
        const startdatetInput= document.getElementById('startdate');
        const enddateteInput= document.getElementById('enddate');
        startdatetInput.addEventListener('change', function(){
         enddateteInput.min = this.value;
         enddateteInput.value='';
    });
        
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const checked = document.querySelectorAll(".check:checked");
  const dates   = document.querySelectorAll('input[type="date"]');
  const days    = Math.round((new Date(dates[1].value) - new Date(dates[0].value)) / 86400000);

  let total = 0;
  let details = "";

  checked.forEach(box => {
    const row   = box.closest("tr");
    const model = row.querySelectorAll("td")[1].textContent.trim();
    const price = Number(row.querySelector(".span").textContent.replace(/,/g, ""));
    const cost  = price * days;

    total += cost;
    details += `• ${model}: الأجر اليومي${price.toLocaleString("en-US")} × ${days} = ${cost.toLocaleString("en-US")} ل.س.ج\n`;
  });

  let discountText = "";
  if (days > 7) {
    const discount = total * 0.10;
    total -= discount;
    discountText = `تهانينا لقد حصلت على خصم %10 لأستئجارك السيارة أكثر من7 أيام ( -${discount.toLocaleString("en-US")} ل.س.ج\n`;
  }

  alert(
    `عدد السيارات المختارة: ${checked.length}\n\n` +
    `${details}\n` +
    discountText +
    `المبلغ الإجمالي: ${total.toLocaleString("en-US")} ل.س.ج`
  );
});