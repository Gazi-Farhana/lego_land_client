const Vision = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(assets/images/vision.jpg)' }}>
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-black">
                        <h1 className="mt-80 mb-5 text-5xl font-bold">Our Vision</h1>
                        <p className="mb-5 font-bold">We have been donating 6% of our profit to UNICEF since 1994.
                           
                            We strongly believe that by 2040, our effort to deminish hurgey will reduce to 0%. We want no child to go to sleep with hunger. </p>
                        <a href="https://www.dailymaverick.co.za/article/2019-10-15-poor-diets-are-damaging-childrens-health-unicef-warns/" className="btn btn-accent" target="_blank" rel="noreferrer">Unicef</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;