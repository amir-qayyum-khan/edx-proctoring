function pluralidx(n) {
  var v=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;
  if (typeof(v) == 'boolean') {
    return v ? 1 : 0;
  } else {
    return v;
  }
}

var catalog = {
    "The email address you've provided isn't formatted correctly.": "آپ کے فراہم کردہ ای میل ایڈریس درست طریقے سے فارمیٹ نہیں کیا گیا ہے.",
    "%(field)s can only contain up to %(count)d characters.": "%(field)s صرف d(شمار)% حروف پر مشتمل ہوسکتا ہے.",
    "%(field)s must have at least %(count)d characters.": "%(field)s کم از کم d(شمار)% ڈی حروف ہونا لازمی ہے.",
    "Please enter your %(field)s.": "براہ مہربانی اپنے s(field)% درج کریں.",
    "We couldn't create your account.": "ہم آپ کا اکاؤنٹ نہیں بن سکا." ,
    "\u2026": "...",
    "We couldn't sign you in.": "ہم آپ میں سائن ان نہیں کر سکتے ہیں.",
    "Please enter required fields.": "برائے مہربانی مطلوبہ فیلڈز درج کریں.",
	"internally reviewed": "اندرونی جائزہ لیا",
	"All Unreviewed": "تمام ناظر",
	"All Unreviewed Failures": "تمام ناپسندیدہ ناکامیاں",
	"active proctored exams": "فعال پروکرمی امتحان",
	"courses with active proctored exams": "فعال پروکرمی امتحان کے ساتھ کورس",
	"Course Id": "کورس کی شناخت",
	"Created": "تخلیق",
	"Download Software Clicked": "سافٹ ویئر ڈاؤن لوڈ کردہ کلک کریں",
	"Ready To Start": "شروع کرنے کے لئے تیار",
	"Started": "شروع",
	"Ready To Submit": "جمع کرنے کے لئے تیار",
	"Declined": "بیان کردہ",
	"Timed Out": "وقت ختم",
	"Submitted": "پیش کردہ",
	"Second Review Required": "دوسرا جائزہ لینے کی ضرورت ہے",
	"Verified": "تصدیق شدہ",
	"Rejected": "مسترد",
	"Error": "غلطی",
	"your course": "آپ کا کورس",
	"Proctoring Session Results Update for {course_name} {exam_name}": "{course_name} {exam_name} کے لئے پروکیکشن سیشن کے نتائج اپ ڈیٹ",
	"Taking As Proctored Exam": "پروکارڈ امتحان کے طور پر لے",
	"Proctored Option Available": "پروکیکٹ اختیار دستیاب ہے",
	"Taking As Open Exam": "کھولیں امتحان کے طور پر لے جا رہا ہے",
	"Pending Session Review": "زیر التواء سیشن کا جائزہ",
	"Passed Proctoring": "منظور شدہ پروکیکٹنگ",
	"Failed Proctoring": "ناکام پروکیکٹنگ",
	"Proctored Option No Longer Available": "پروکیکٹ اختیار ابھی تک دستیاب نہیں ہے",
	"Ungraded Practice Exam": "غیر رجسٹرڈ پریکٹس کی امتحان",
	"Practice Exam Completed": "امتحان کی تکمیل مکمل",
	"Practice Exam Failed": "پریکٹس کی امتحان ناکام ہوگئی",
	"Timed Exam": "ٹائم کی جانچ",
	"pending": "زیر التواء",
	"satisfactory": "اطمینان بخش",
	"unsatisfactory": "ناگزیر",
	"Taking as Proctored": "پروکارڈ کے طور پر لے",
	"Is Sample Attempt": "نمونے کی کوشش ہے",
	"Additional Time (minutes)": "اضافی وقت (منٹ)",
	"Review Policy Exception": "جائزہ پالیسی استثنا",
	"This email is to let you know that the status of your proctoring session review for %(exam_name)s in\n <a href=\"%(course_url)s\">%(course_name)s </a> is %(status)s. If you have any questions about proctoring,\n contact %(platform)s support at %(contact_email)s.": "یہ ای میل آپ کو پتہ ہے میں %(exam_name)s کے لئے اپنے proctoring سیشن کا جائزہ لینے کی حیثیت ہے کہ اجازت دینا ہے a href=\"%(course_url)s\">%(course_name)s</a> %(status)>ہے. اگر آپ کے پاس پروکیکٹنگ کے بارے میں کوئی سوال ہے تو %(contact_email)s پر %(platform)s کی حمایت سے رابطہ کریں.",
	"Try a proctored exam": "ایک متوقع امتحان کی کوشش کریں",
	"Get familiar with proctoring for real exams later in the course. This practice exam has no impact\non your grade in the course.": "بعد میں کورس میں حقیقی امتحانات کے لئے پروکیکٹنگ سے واقف ہو جاؤ. یہ پریکٹس امتحان کورس میں آپ کے گریڈ پر کوئی اثر نہیں ہے.",
	"Continue to my practice exam": "میری آزمائشی امتحان پر جاری رکھیں",
      "You will be guided through steps to set up online proctoring software and to perform various checks.": "آپ آن لائن پروکیکنگ سوفٹ ویئر قائم کرنے اور مختلف چیک کرنے کے لئے اقدامات کے ذریعہ ہدایت کی جائیں گی.",
        "There was a problem with your practice proctoring session": "آپ کے مشق کے پروکیکٹنگ سیشن میں ایک مسئلہ تھا",
        "Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>": "آپ کی پریکٹس کے نتائج کو پروکینگ کرنا: <b class=\"failure\">غیر متفقہ</b>",
    "Your proctoring session ended before you completed this practice exam.\n      You can retry this practice exam if you had problems setting up the online proctoring software.": "آپ کا پروکیکشن سیشن ختم ہونے سے پہلے آپ نے یہ عملی امتحان مکمل کیا. آپ اس پریکٹس کے امتحان کو دوبارہ حاصل کرسکتے ہیں، اگر آپ آن لائن پروکیکٹنگ سافٹ ویئر کی ترتیبات کو حل کرنے میں مصروف ہیں.",
        "Try this practice exam again": "اس مشق کا امتحان دوبارہ کوشش کریں",
        "You have submitted this practice proctored exam": "آپ نے اس عمل کو امتحان پیش کیا ہے",
    "Practice exams do not affect your grade or your credit eligibility.\n      You have completed this practice exam and can continue with your course work.": "پریکٹس امتحان آپ کے گریڈ یا آپ کے کریڈٹ کی اہلیت کو متاثر نہیں کرتے ہیں. آپ نے اس مشق کا امتحان مکمل کیا ہے اور آپ کے کورس کے کام کے ساتھ جاری رہ سکتے ہیں.",
        "You can also retry this practice exam": "آپ اس پریکٹس امتحان کو بھی دوبارہ حاصل کرسکتے ہیں",
        "Are you sure you want to take this exam without proctoring?": "کیا آپ واقعی یہ آزمائشی کے بغیر پروکیکٹنگ کرنا چاہتے ہیں؟",
    "If you take this exam without proctoring, you will <strong> no longer be eligible for academic credit. </strong>": "اگر آپ اس امتحان کے بغیر پروکیکنگ کے بغیر لے جائیں گے، تو آپ <strong>اب تعلیمی کریڈٹ کے اہل نہیں ہوں گے.</strong>",
        "Continue Exam Without Proctoring": "پرویکٹرنگ کے بغیر امتحان جاری رکھیں",
        "Go Back": "واپس جاو",
        "This exam is proctored": "یہ امتحان پیش کیا جاتا ہے",
    "To be eligible for course credit or for a MicroMasters credential, you must pass the proctoring review for this exam.": "کورس کریڈٹ کے لئے یا مائیکرو میسٹروں کے اعتبار سے اہل ہونے کے لئے، آپ کو اس امتحان کے لئے پروکیکنگ کا جائزہ لینے کے لۓ پاس کرنا ہوگا.",
        "Continue to my proctored exam. I want to be eligible for credit.": "میری پرکشش جانچ پڑتال جاری رکھیں. میں کریڈٹ کے اہل ہوں.",
    "You will be guided through steps to set up online proctoring software and to perform various checks.</br>": "آپ آن لائن پروکیکنگ سوفٹ ویئر قائم کرنے اور مختلف چیک کرنے کے لئے اقدامات کے ذریعہ ہدایت کی جائیں گی. </br>",
        "Error with proctored exam": "تشخیصی امتحان کے ساتھ خرابی",
    "A technical error has occurred with your proctored exam. To resolve this problem, contact\n      <a href=\"mailto:%(tech_support_email)s\">technical support</a>. All exam data, including answers\n      for completed problems, has been lost. When the problem is resolved you will need to restart\n      the exam and complete all problems again.": "آپ کے پروکرمی امتحان کے ساتھ ایک تکنیکی غلطی ہوئی ہے. اس مسئلہ کو حل کرنے کے لئے <a href=\"mailto:%(tech_support_email)s\">تکنیکی مدد</a> سے رابطہ کریں. تمام امتحان کے اعداد و شمار، بشمول مکمل مسائل کے جوابات سمیت، کھو گیا ہے. جب مسئلہ حل ہوجاتا ہے تو آپ کو امتحان کو دوبارہ شروع کرنے اور تمام مسائل کو مکمل کرنے کی ضرورت ہوگی.",
    "View your credit eligibility status on your <a href=\"%(progress_page_url)s\">Progress</a> page.": "اپنے <a href=\"%(progress_page_url)s\">پیش رفت کے</a> صفحے پر اپنے کریڈٹ کی اہلیت کی حیثیت دیکھیں.",
    "If you have concerns about your proctoring session results, contact your course team.": "اگر آپ کے بارے میں تشویش ہے آپ کے پروکیکشن سیشن کے نتائج، اپنے کورس کی ٹیم سے رابطہ کریں.",
        "The due date for this exam has passed": "اس امتحان کے لئے تاریخ کی تاریخ منظور ہو گئی ہے",
        "Because the due date has passed, you are no longer able to take this exam.": "کیونکہ تاریخ کی تاریخ منظور ہو چکی ہے، آپ اب اس امتحان لینے کے قابل نہیں ہیں.",
    "You did not satisfy the requirements for taking this exam with proctoring, and are not eligible for credit. See your <a href=\"%(progress_page_url)s\">Progress</a> page for a list of requirements and your status for each.": "آپ نے اس امتحان کو پروکیکٹنگ لینے کے لۓ پورا نہیں کیا، اور کریڈٹ کے اہل نہیں ہیں. اپنے <a href=\"%(progress_page_url)s\">پیش رفت کے</a> صفحے کی ضروریات کی فہرست اور ہر ایک کے لئے آپ کی حیثیت کے لئے ملاحظہ کریں.",
        "You did not satisfy the following prerequisites:": "آپ مندرجہ ذیل ضروریات کو پورا نہیں کرتے تھے:",
    "Due to unsatisfied prerequisites, you can only take this exam without proctoring.": "ناپسندیدہ شرطوں کی وجہ سے، آپ صرف اس امتحان کے بغیر پروکیکٹنگ لے سکتے ہیں.",
    "If you have questions about the status of your requirements for course credit, contact %(platform_name)s Support.": "اگر آپ کے پاس کریڈٹ کریڈٹ کے لئے اپنی ضروریات کی حیثیت کے بارے میں سوالات ہیں تو، %(platform_name)s سپورٹ سے رابطہ کریں.",
        "About Proctored Exams": "پروکارڈ امتحان کے بارے میں",
        "Complete your verification before starting the proctored exam.": "تجزیہ کردہ امتحان شروع کرنے سے پہلے اپنی توثیق مکمل کریں.",
    "You must successfully complete identity verification before you can start the proctored exam.": "اس سے پہلے کہ آپ پروکارڈ امتحان شروع کر سکیں اس سے پہلے آپ کو شناخت کی توثیق مکمل کرنی چاہیے.",
    "Your verification is pending. Results should be available 2-3 days after you\n submit your verification.": "آپ کی توثیق زیر التواء ہے. آپ کی توثیق جمع کرنے کے بعد نتائج 2-3 دن دستیاب ہونا چاہئے.",
    "Your verification attempt failed. Please read our guidelines to make\n                    sure you understand the requirements for successfully completing verification,\n                    then try again.": "آپ کی توثیق کی کوشش ناکام ہوگئی. اس بات کا یقین کرنے کے لئے کہ آپ کو کامیابی سے توثیق مکمل کرنے کے لئے ضروریات کو سمجھنے کے لۓ اپنے ہدایات کو پڑھیں، پھر دوبارہ کوشش کریں.",
        "Retry Verification": "تصدیق دوبارہ کریں",
        "Your verification has expired. You must successfully complete a new identity verification\n before you can start the proctored exam.": "آپ کی توثیق ختم ہوگئی ہے. اس سے پہلے کہ آپ پروکارڈ امتحان شروع کر سکیں اس سے پہلے آپ کو ایک نئی شناخت کی توثیق مکمل کرنا ضروری ہے.",
        "Continue to Verification": "توثیق جاری رکھیں",
    "Make sure you are on a computer with a webcam, and that you have valid photo identification\n                    such as a driver's license or passport, before you continue.": "اس بات کو یقینی بنائیں کہ آپ ویب کیم کے ساتھ کمپیوٹر پر ہیں، اور آپ کے پاس جاری رکھنے سے پہلے آپ کے پاس درست تصویر کی شناخت جیسے ڈرائیور ایس 1 لائسنس یا پاسپورٹ ہے.",
        "Follow these steps to set up and start your proctored exam.": "قائم کرنے اور اپنے پروکرمی امتحان شروع کرنے کے لئے ان اقدامات پر عمل کریں.",
    "1. Copy this unique exam code. You will be prompted to paste this code later before you start the exam.": "1. اس منفرد امتحان کا کوڈ کاپی کریں. آپ کو اس کوڈ کو پیسٹ کرنے کے بعد آپ کو امتحان شروع کرنے سے پہلے پیسہ دیا جائے گا.",
    "Select the exam code, then copy it using Command+C (Mac) or Control+C (Windows).": "امتحان کوڈ منتخب کریں، پھر کمانڈ + سی (میک) یا کنٹرول + سی (ونڈوز) کا استعمال کرتے ہوئے کاپی کریں.",
        "2. Follow the link below to set up proctoring.": "2. پروکیکٹنگ قائم کرنے کے لئے نیچے دیئے گئے لنک پر عمل کریں.",
        "Start System Check": "سسٹم چیک شروع کریں",
        "A new window will open. You will run a system check before downloading the proctoring application.": "ایک نئی ونڈو کھل جائے گی. آپ کو پروکیکٹنگ ایپلیکیشن ڈاؤن لوڈ کرنے سے پہلے ایک سسٹم چیک چیک کریں گے.",
    "You will be asked to verify your identity as part of the proctoring exam set up.\n        Make sure you are on a computer with a webcam, and that you have valid photo identification\n        such as a driver's license or passport, before you continue.": "آپ کو اپنی شناخت کی توثیق کرنے کے لئے کہا جائے گا کہ آپ پروکیکنگ امتحان کے حصے کے طور پر مقرر کریں. اس بات کو یقینی بنائیں کہ آپ ویب کیم کے ساتھ کمپیوٹر پر ہیں، اور آپ کے پاس جاری رکھنے سے پہلے آپ کے پاس درست تصویر کی شناخت جیسے ڈرائیور ایس 1 لائسنس یا پاسپورٹ ہے.",
        "3. When you have finished setting up proctoring, start the exam.": "3. جب آپ پروکیکٹنگ کی ترتیب کو ختم کر چکے ہیں، تو امتحان شروع کریں.",
        "Start Proctored Exam": "پروکارڈ امتحان شروع کریں",
        "Close": "بند کریں",
        "Cannot Start Proctored Exam": "پروکارڈ امتحان شروع نہیں کر سکتے ہیں",
        "Take this exam without proctoring.": "بغیر امتحان کے بغیر یہ امتحان لیں.",
        "Doing so means that you are no longer eligible for academic credit.": "اس کا مطلب یہ ہے کہ آپ اب تعلیمی کریڈٹ کے اہل نہیں ہیں.",
    "You have not completed the prerequisites for this exam. All requirements must be satisfied before you can take this proctored exam and be eligible for credit. See your <a href=\"%(progress_page_url)s\">Progress</a> page for a list of requirements in the order that they must be completed.": "آپ نے اس امتحان کے لئے ضروریات مکمل نہیں کی ہیں. آپ اس پروکرمی امتحان لے سکتے ہیں اور کریڈٹ کے اہل ہونے سے قبل تمام ضروریات کو مطمئن ہونا ضروری ہے. آپ کے <a href=\"%(progress_page_url)s\">پیش رفت کے</a> صفحے کی ضروریات کی فہرست کے لۓ دیکھیں تاکہ انہیں مکمل کرنا ضروری ہے.",
    "The following prerequisites are in a <strong>pending</strong> state and must be successfully completed before you can proceed:": "مندرجہ ذیل شرطیں <strong>زیر التواء</strong> ریاست میں ہیں اور آپ آگے بڑھ سکتے ہیں اس سے پہلے کامیابی سے مکمل ہونا ضروری ہے:",
    "You can take this exam with proctoring only when all prerequisites have been successfully completed. Check your <a href=\"%(progress_page_url)s\">Progress</a>  page to see if prerequisite results have been updated. You can also take this exam now without proctoring, but you will not be eligible for credit.": "آپ یہ امتحان لے سکتے ہیں کہ صرف پروکیکٹنگ کے ساتھ ہی صرف جب سب ضروریات مکمل طور پر مکمل ہوئیں. اپنے <a href=\"%(progress_page_url)s\">پیش رفت کے</a> صفحے کی جانچ پڑتال کرنے کے لئے چیک کریں کہ لازمی نتائج کو اپ ڈیٹ کیا گیا ہے. آپ اب بھی اس امتحان کے بغیر پروکیکونگ لے سکتے ہیں، لیکن آپ کریڈٹ کے اہل نہیں ہوں گے.",
        "Your Proctoring Session Has Started": "آپ کا پروکیکٹنگ اجلاس شروع ہوگیا ہے",
    "From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam.": "اس وقت سے، آپ کو اپنے امتحان کے لئے پروکیکنگ کا جائزہ لینے کے لۓ <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">آن لائن پروکیکٹنگ قوانین</a> کو عمل کرنا ضروری ہے.",
    "Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.": "آپ اپنی امتحان کو ختم کرنے سے پہلے یہ ونڈو بند نہ کریں. اگر آپ اس ونڈو کو بند کرتے ہیں تو، آپ کے پروکیکشن سیشن ختم ہوجاتا ہے، اور آپ کو پروجیکٹ شدہ امتحان مکمل طور پر مکمل نہیں کریں گے.",
    "Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.": "اپنی امتحان شروع کرنے کے لئے %(platform_name)s کورس ونڈو میں واپس جائیں. جب آپ نے اپنی امتحان کو مکمل کر لیا اور اسے مکمل طور پر نشان لگا دیا ہے تو، آپ کو پروکیکٹنگ سیشن کو ختم کرنے کے لئے اس ونڈو کو بند کر سکتے ہیں اور جائزہ لینے کے لئے اپنے پروکیکنگ سیشن ڈیٹا اپ لوڈ کرسکتے ہیں.",
        "I am not interested in academic credit.": "مجھے تعلیمی کریڈٹ میں دلچسپی نہیں ہے.",
        "Follow these instructions": "ان ہدایات پر عمل کریں",
    "&#8226; When you start your exam you will have %(total_time)s to complete it. </br>\n        &#8226; You cannot stop the timer once you start. </br>\n        &#8226; If time expires before you finish your exam, your completed answers will be\n                submitted for review. </br>": "&amp; #8226؛ جب آپ اپنی امتحان شروع کرتے ہیں تو آپ اسے مکمل کرنے کے لئے %(total_time)s پڑے گا. </br> &amp; #8226؛ آپ ٹائمر کو ایک بار شروع نہیں کر سکتے ہیں. </br> &amp; #8226؛ اگر آپ اپنی امتحان ختم کرنے سے قبل وقت ختم ہوجاتا ہے، تو آپ کے مکمل جوابات جائزہ لینے کے لئے جمع کیے جائیں گے. </br>",
        "Start my exam": "میری امتحان شروع کرو",
        "Are you sure you want to end your proctored exam?": "کیا آپ واقعی اپنے پروکرمی امتحان ختم کرنا چاہتے ہیں؟",
    "Make sure that you have selected \"Submit\" for each problem before you submit your exam.": "اس بات کو یقینی بنائیں کہ آپ اپنی امتحان جمع کرنے سے قبل ہر مسئلے کے لئے \"Submit\" کا انتخاب کیا ہے.",
    "After you submit your exam, your responses are graded and your proctoring session is reviewed.\n      You might be eligible to earn academic credit for this course if you complete all required exams\n      as well as achieve a final grade that meets credit requirements for the course.": "آپ اپنی امتحان جمع کرنے کے بعد، آپ کے جوابات درجہ بندی کیے جاتے ہیں اور آپ کے پروکیکشن کا جائزہ لیا جاتا ہے. آپ اس کورس کے لئے تعلیمی کریڈٹ حاصل کرنے کے اہل ہوسکتے ہیں اگر آپ لازمی امتحان مکمل کریں اور حتمی گریڈ حاصل کریں جو کورس کے لئے کریڈٹ کی ضروریات کو پورا کریں.",
        "Yes, end my proctored exam": "جی ہاں، میری پروکرمی امتحان ختم",
        "No, I'd like to continue working": "نہیں، I'D کام جاری رکھنے کی طرح",
        "Your proctoring session was reviewed and did not pass requirements": "آپ کے پروکیکٹنگ سیشن کا جائزہ لیا گیا اور ضروریات کو منظور نہیں کیا گیا",
    "You are no longer eligible for academic credit for this course, regardless of your final grade.\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.": "آپ کو اس کورس کے لئے علمی کریڈٹ کے لۓ مزید مستحق نہیں ہیں، قطع نظر آپ کے آخری گریڈ کے. اگر آپ کے سوالات کے بارے میں سوالات کے بارے میں سوالات ہیں تو، %(platform_name)s سپورٹ سے رابطہ کریں.",
        "You have submitted this proctored exam for review": "آپ نے اس تجویز کردہ امتحان کا جائزہ لیا ہے",
    "If the proctoring software window is still open, you can close it now. =Confirm that you want to quit the application when you are prompted.": "اگر پروکیکنگ سوفٹ ویئر ونڈو ابھی بھی کھلا ہے تو، آپ اب اسے بند کر سکتے ہیں. اس بات کی توثیق کریں کہ آپ ایپلی کیشنز کو چھوڑنے کے بعد چھوڑنا چاہتے ہیں.",
    "&#8226; After you quit the proctoring session, the recorded data is uploaded for review. </br>\n      &#8226; Proctoring results are usually available within 5 business days after you submit your exam.": "&amp; #8226؛ پروکیکٹنگ سیشن چھوڑنے کے بعد، ریکارڈ کردہ ڈیٹا جائزے کے لئے اپ لوڈ کیا جاتا ہے. </br> &amp; #8226؛ آپ کے امتحان جمع کرنے کے بعد پرویکٹرنگ کے نتائج عام طور پر 5 کاروباری دنوں کے اندر اندر دستیاب ہیں.",
    "If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.": "اگر آپ کے سوالات کے بارے میں سوالات کے بارے میں سوالات ہیں تو, %(platform_name)s سپورٹ سے رابطہ کریں.",
        "Your proctoring session was reviewed and passed all requirements": "آپ کے پروکیکٹنگ سیشن کا جائزہ لیا اور تمام ضروریات کو منظور کیا گیا تھا",
    "You are eligible to purchase academic credit for this course if you complete all required exams\n      and also achieve a final grade that meets the credit requirements for the course.": "آپ اس کورس کے لئے تعلیمی کریڈٹ خریدنے کے اہل ہیں اگر آپ لازمی امتحان مکمل کریں اور حتمی گریڈ بھی حاصل کریں جو کورس کے لئے کریڈٹ کی ضروریات کو پورا کریں.",
    "To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.": "اپنے امتحان کے سوالات اور جوابات دیکھنے کے لئے، <strong>میری امتحان دیکھیں</strong> . بائیں نیویگیشن پین میں امتحان کی حیثیت کا جائزہ لینے کا مقام دکھایا گیا ہے.",
        "View my exam": "میری امتحان دیکھیں",
    "After the due date for this exam has passed, you will be able to review your answers on this page.": "اس امتحان کے لئے مقررہ تاریخ منظور ہونے کے بعد، آپ اس صفحہ پر آپ کے جوابات کا جائزہ لے سکیں گے.",
        "%(exam_name)s is a Timed Exam (%(total_time)s)": "%(exam_name)s ایک ٹائم ٹیسٹ (%(total_time)s) ہے.",
        "This exam has a time limit associated with it.": "یہ امتحان اس کے ساتھ منسلک ایک وقت کی حد ہے.",
        "To pass this exam, you must complete the problems in the time allowed.": "اس امتحان کو منتقل کرنے کے لئے، آپ کو وقت کی اجازت دی جانے والی مشکلات کو پورا کرنا ضروری ہے.",
        "After you select": "آپ کو منتخب کرنے کے بعد",
        "I am ready to start this timed exam,": "میں اس ٹائم شدہ امتحان شروع کرنے کے لئے تیار ہوں،",
        "you will have": "آپ کو پڑے گا",
        "to complete and submit the exam.": "امتحان مکمل کرنے اور جمع کرنے کے لئے.",
        "I am ready to start this timed exam.": "میں اس ٹائم شدہ امتحان شروع کرنے کے لئے تیار ہوں.",
        "Can I request additional time to complete my exam?": "کیا میں اپنی امتحان کو مکمل کرنے کے لئے اضافی وقت کی درخواست کر سکتا ہوں؟",
    "If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.": "اگر آپ معذور ہیں تو، آپ کو ٹائم شدہ امتحانوں پر اضافی وقت کی الاؤنس کے اہل ہوسکتا ہے. اضافی وقت کے الاؤنس کے بارے میں معلومات کے لئے اپنے کورس کی ٹیم سے پوچھیں.",
        "Are you sure that you want to submit your timed exam?": "کیا آپ اس بات کو یقینی بناتے ہیں کہ آپ اپنا ٹائم شدہ امتحان جمع کرنا چاہتے ہیں؟",
        "After you submit your exam, your exam will be graded.": "آپ اپنی امتحان جمع کرنے کے بعد، آپ کا امتحان درجہ بندی کیا جائے گا.",
        "Yes, submit my timed exam.": "جی ہاں، اپنا ٹائم ٹیسٹ کریں.",
        "No, I want to continue working.": "نہیں، میں کام جاری رکھنا چاہتا ہوں.",
        "The time allotted for this exam has expired. Your exam has been submitted and any work you completed will be graded.": "اس امتحان کے لئے مختص کردہ وقت ختم ہو گیا ہے. آپ کی امتحان جمع کردی گئی ہے اور آپ کے مکمل کردہ کام کو درجہ بندی کیا جائے گا.",
        "You have submitted your timed exam.": "آپ نے اپنا ٹائم ٹیسٹ کیا ہے.",
        "Your grade for this timed exam will be immediately available on the <a href=\"%(progress_page_url)s\">Progress</a> page.": "متوقع تاریخ منظور ہونے کے بعد، آپ امتحان کا جائزہ لے سکتے ہیں، لیکن آپ اپنے جوابات کو تبدیل نہیں کرسکتے ہیں.",
    "After the due date has passed, you can review the exam, but you cannot change your answers.": "متوقع تاریخ منظور ہونے کے بعد، آپ امتحان کا جائزہ لے سکتے ہیں، لیکن آپ اپنے جوابات کو تبدیل نہیں کرسکتے ہیں.",
        "{num_of_hours} hour": "{num_of_hours} گھنٹے",
        "{num_of_hours} hours": "{num_of_hours} گھنٹے",
        "{num_of_minutes} minutes": "{num_of_minutes} منٹ",
        "and {num_of_minutes} minute": "اور {num_of_minutes} منٹ",
        "{num_of_minutes} minute": "{num_of_minutes} منٹ",
        "and {num_of_minutes} minutes": "اور {num_of_minutes} منٹ",
        "could not determine the course_id": "کورس_ڈ کا تعین نہیں کیا جا سکا",
        "Must be a Staff User to Perform this request.": "اس درخواست کو انجام دینے کے لئے اسٹاف صارف ہونا ضروری ہے.",
        "you have {remaining_time} remaining": "آپ کے پاس {remaining_time} باقی ہے",
        "you have less than a minute remaining": "آپ کے پاس باقی ایک منٹ سے بھی کم ہے",
        "timed": "ٹائمز",
        "practice": "مشق",
        "proctored": "مختار",
};

function gettext(msgid) {
    var value = catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
}

function ngettext(singular, plural, count) {
    var value = catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[pluralidx(count)];
    }
}

function gettext_noop(msgid) { return msgid; }

function pgettext(context, msgid) {
  var value = gettext(context + '\x04' + msgid);
  if (value.indexOf('\x04') != -1) {
    value = msgid;
  }
  return value;
}

function npgettext(context, singular, plural, count) {
 var value = ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
 if (value.indexOf('\x04') != -1) {
   value = ngettext(singular, plural, count);
 }
 return value;
}


function interpolate(fmt, obj, named) {
  if (named) {
    return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
  } else {
    return fmt.replace(/%s/g, function(match){return String(obj.shift())});
  }
}


window.pluralidx = pluralidx;
window.gettext = gettext;
window.ngettext = ngettext;
window.gettext_noop = gettext_noop;
window.pgettext = pgettext;
window.npgettext = npgettext;
window.interpolate = interpolate;
