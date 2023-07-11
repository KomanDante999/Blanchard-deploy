    В данном проекте я поставил задачу использовать блочную систему и atomic css подход.

Я постарался на практике реализовать независимость блоков (насколько это позволяет отсутсвие сборщика) - каждый блок разрабатывался отдельно и имеет независимую функциональность, все файлы блока (кроме разметки) находятся в папке блока.
Секции сделаны из нескольких блоков, в CSS секции определяются только свойства самой секции (отступы, бэкграунд), ее элементов (заголовки, текст), и позиционирование независимых блоков, из которых она состоит.
Из недостатков - я не смог реализовать переиспользование блоков путем переопределения их свойств (как это предполагается в БЭМ методологии), например для каждого слайдера пришлось писать свой CSS и JS - слишком разная у них механика в данном проекте. В итоге любой блок в проекте реально можно перенести в любое место проекта или в другой проект, подключив необходимые библиотеки.

К использованию atomic css меня подтолкнул сам макет проекта, покольку не удалось привычным способом выделить некий ограниченный набор свойств для кнопок, ссылок и текста. Практически каждая кнопка и каждая ссылка имеют свои особенности, нюансы, дизайнер не придерживался некоего единого шаблона даже в цветовой палитре. Фактически в каждой секции свой набор свойств интерактивных элементов, очень похожих на другие, но с какими нибудь отличиями. После создания 6-го набора типа "button style 6" я понял бесперспективность этого занятия, к тому же наборы стилей очень сильно пересекались, что нарушало принципы SOLID, в частности принцип DRY. 
По итогу я сам пришел к мысли о необходимости вынесения в отдельные наборы не всех свойств кнопок и ссылок, а только отдельных, например попытался выделить стили только для hover, focus и active эффектов, сделав их универсальными и для кнопок, и для ссылок. Но тоже отказался от этой идеи, поскольку опять получил огромное количество пересекающихся наборов свойств.
В раздумьях, как оптимизировать свой код и все таки создать некое подобие "шаблонов", я посмотрел пару выступлений на конференциях про atomic css подход и понял, что это именно то, что мне нужно! К тому же мне очень понравилось использовать атомарные стили в bootstrap.
В силу того, что я еще не знаком с препроцессорами и сборщиками проектов, я решил для начала просто использовать библиотеку заранее заготовленных стилей. Но ни один из имеющихся вариантов меня не устроил (к тому же у нас в проекте слишком специфическая палитра цветов) и я решил написать библиотеку сам. К моему удивлению это не заняло много времени - буквалльно за 2 часа я создал основу, которую дополнял и совершенствовал в процессе работы над проектом. Конечно я допустил ряд стратегических ошибок в нейминге, которые стали ясны только к коцу работы над проектом, но я решил в данном случае не переписывать полностью библиотеку, а сделать другую версию для следующего проекта.
По началу меня смущало большое количество классов в HTML, мне козалось, что будет очень неудобно разбирать такой код особонно для другого разработчика. Однако, после завершения проекта я начал переписывать некоторые его части, поскольку мое видение "правильного кода" и мой подход сильно изменились к концу работы над проектом, и то, что я делал в начале, мне захотелось переписать. И заметил, что достаточно легко читаю код, который "уже забыл" - я легко понимал, что это за элемент и как он себя ведет без обращения к CSS, это оказалось очень удобным.
Более того, делая кодревью своей коллеги по обучению, то есть читая чужой код, я понял, что мне очень сильно не хватает именно в HTML маркеров того, что это за блок, какое у него позиционирование, свойства блочной модели и как он соотносится  с родительским блоком. Для этого приходилось постоянно переключаться между HTML и CSS.
В результате на мой взгляд мне удалось создать непротиворечивую и достаточно удобочитаемую библиотеку atomic css, хотя и не без недостатков. Для удобства работы с моей библиотекой я написал отдельный readme_atomic.

Небольшое нарушение code style - для классов media queries использована заглавная M в начале имени класса. Это оправдано тем, что так наиболее удобно выделяются все те изменения, которые происходят с элементом на брекпоинтах. Пробовал использовать маленькую букву m - очень трудно было выделить именно свойства на брекпоинтах.
Так же в фпйлах css атомарных стилей не стал делать переносы строк и отступы для экономии места и лучшей читаемости.

JS.
Поскольку я еще не изучал JS, мой JS-code не очень грамотный и оптимальный. Я как мог, использовал код из ваших примеров, но понимаю, что это очень топорный перенос. Понял острую необходимость изучения JS. 

Modal.
Не удалось реализовать закрытие модального окна по кнопке X. В файле modal-window.js я оставил закоменнтированным свой код, посмотрите что с ним не так.

Button X, V
При создании кнопок формы X или V поставил следующие задачи:
1. Кнопка не должна иметь дополнительные элементы для отрисовки линий в разметке, линии рисуются только за счет псевдоэлементовю
2. Кнопка не должна иметь position: relativ, так как часто ее саму необходимо позиционировать абсолютно.
3. Координаты центра пересечения линий в button X не должны высчитываться в формуле.
4. Задавать все внутренние свойства кнопки полностью в HTML атомарными классами, включая ее размеры. Это делает кнопку универсальной и независимой. В CSS задается только ее позиционирование. 

В целом по данному проекту хотелось бы сказать, что требование pixsel perfect часто делает код сложнее, чем он мог бы быть, и более "хрупким". Напимер из-за разницы в переносе текста (который дизайнер вообще не оттипографил) в секции Проекты на разных брекпоинтах получается +1 или -1 строка текста в сравнении с шаблоном, что для самого сайта не критично, но сразу же разрушает весь pixsel perfect. И для устранения этого приходится устраивать танцы с бубном, писать лишний код.
