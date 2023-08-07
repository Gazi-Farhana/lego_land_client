const Speciality = () => {
    return (
        <div>
            <h2 className="mb-10 text-4xl font-bold text-center">Why Lego is so special?</h2>
            <p className="text-center mb-8">We want to provide children with the safest possible play experience. That’s why we have a relentless focus on product safety and require our products to pass a series of rigorous internal and external safety tests.</p>
<div className="flex">
<div className="px-12 space-y-2">
<div  tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
   Are the ingridiests used in lego safe for kids?
  </div>
  <div className="collapse-content"> 
    <p>Lego toys are made free of hazardous chemicals, colors or raw materials. We have the full ingredients list of every raw material and decoration ink we use for LEGO elements. </p>
  </div>
</div>
<div tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    What is impact test on lego toy?
  </div>
  <div className="collapse-content"> 
    <p>We drop a 1-kilogram (2-pound) metal disc onto potential weak points on LEGO DUPLO elements from a height of 4.7 inches (12 cm). This is to ensure the element does not break or splinter during play.</p>
  </div>
</div>
<div tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    How we do our compression test on lego?
  </div>
  <div className="collapse-content"> 
    <p>We simulate a young child stepping on certain LEGO elements by pressing a metal disc with a force equivalent to 33 pounds (15 kg) on the element to ensure that it does not break or splinter during play.</p>
  </div>
</div>
<div tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    How rigid is lego toys when the fall from high height?
  </div>
  <div className="collapse-content"> 
    <p> We drop the elements from a height of 4 feet (1.5 m) and 3 feet (1 m), respectively, five times onto a hard surface to ensure that LEGO DUPLO and LEGO elements do not splinter or break when a child drops them during play.</p>
  </div>
</div>
</div>
<div>
    <img src="../../../../public/assets/images/lego_question.jpg" alt="lego_question" />
</div>
</div>
        </div>
    );
};

export default Speciality;