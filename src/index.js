/*global $*/
const accordionData = [
    {
        title: 'Kyiv',
        content: `Kyiv is the capital and most populous city of Ukraine. 
            It is in north-central Ukraine along the Dnieper River. 
            As of 1 January 2021 its population was 2,962,180 making Kyiv the seventh-most populous city in Europe.`,
    },
    {
        title: 'London',
        content: `London is the capital and largest city of England and the United Kingdom. 
            The city stands on the River Thames in the south-east of England, 
            at the head of its 50-mile (80 km) estuary leading to the North Sea.`,
    },
    {
        title: 'Paris',
        content: `Paris is the capital and most populous city of France, 
            with an estimated population of 2,175,601 residents as of 2018, 
            in an area of more than 105 square kilometres (41 square miles).`,
    },
    {
        title: 'Berlin',
        content: `Berlin is the capital and largest city of Germany by both area and population. 
            Its 3.8 million inhabitants make it the European Union's most populous city, 
            according to population within city limits. 
            One of Germany's sixteen constituent states, 
            Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, 
            Brandenburg's capital.`,
    },
    {
        title: 'Warsaw',
        content: `Warsaw is the capital and largest city of Poland. 
            The metropolis stands on the Vistula River in east-central Poland and its 
            population is officially estimated at 1.8 million residents within a greater 
            metropolitan area of 3.1 million residents, which makes Warsaw the 
            7th most-populous capital city in the European Union.`,
    },
    {
        title: 'Prague',
        content: `Prague is the capital and largest city in the Czech Republic, 
            the 13th largest city in the European Union and the historical capital of Bohemia. 
            Situated on the Vltava river, Prague is home to about 1.3 million people, 
            while its metropolitan area is estimated to have a population of 2.7 million.`,
    },
];

function contentCreator(arr) {
    for (const item of arr) {
        const $container = $('<div>');
        $container.addClass('container');
        $('.wrapper').prepend($container);

        const $titleContainer = $('<div></div>');
        $titleContainer.addClass('titleContainer');
        $container.append($titleContainer);

        const $title = $('<h3>');
        $title.html(item.title);
        $title.addClass('title');

        const $content = $('<div>');
        $content.html(item.content);
        $content.addClass('content');

        const $chevron = $('<i class="fas fa-chevron-left"></i>');

        $titleContainer.append($title).append($chevron);
        $container.append($content);
    }
    return $('.wrapper');
}

contentCreator(accordionData);

$('.container').on('click', '.titleContainer', function () {
    const timeout = 500;
    const firstElem = 1;
    const target = $(this).next();
    const titleItems = $(this).children();
    const arrow = titleItems[firstElem];
    if (target.css('display') === 'none') {
        $(arrow).addClass('rotated');
    } else $(arrow).removeClass('rotated');
    $('.content').not($(target)).slideUp(timeout);
    $(target).slideToggle(timeout);
});
